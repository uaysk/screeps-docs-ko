---
title: MongoDB와 Redis를 사용하는 Ubuntu 프라이빗 서버
contributed:
    name: tedivm
    link: https://github.com/tedivm
    date: 2018-02-07
---

Screeps 엔진은 [오픈 소스](https://github.com/screeps/screeps)이므로, 누구나 프라이빗 서버(Private Servers)를 직접 운영할 수 있습니다. Steam 클라이언트는 프라이빗 서버 실행을 더 쉽게 해주는 도구도 제공합니다.

데스크톱이나 윈도우 시스템이 없는(headless) 서버(예: Linode나 AWS에서 구동하는 경우)를 운영하려면, 안정적인 서버를 만들기 위해 조금 더 작업이 필요합니다. 특히 내장 LokiJS 엔진은 시간이 지나며 스케일이 잘 되지 않습니다. 이 튜토리얼에서는 MongoDB와 redis를 사용한 전용 환경에 Screeps를 설치하는 과정을 안내합니다.

## 사전 준비(Prerequisites)

### 서버

이 글은 Ubuntu 16을 사용한다고 가정합니다. 최소 2코어/2GB RAM을 권장하지만, 싱글 플레이어와 몇 개의 봇 정도라면 1코어/2GB 머신도 적당한 틱 속도로 동작할 수 있습니다.

이 시스템은 CPU를 많이 쓰는 편이므로, AWS t2 라인처럼 일정 CPU를 제공하지 않는 "burstable" 서버는 피하는 것이 좋습니다.

### 빌드 도구

아래 단계에서는 일반적인 빌드/개발 도구가 필요하므로 여기서 설치합니다.

```shell
sudo apt install -y build-essential tcl git
```

### Node 설치

메인 월드는 Node8에서 동작하지만, Ubuntu는 더 오래된 Node6만 제공합니다. 다행히도 다른 apt 저장소를 사용해 최신 버전을 설치할 수 있습니다.

```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt install -y nodejs
```

### Mongo 설치

Ubuntu 저장소의 MongoDB 버전은 놀랄 만큼 오래되었습니다. MongoDB는 업데이트된 버전의 apt 저장소를 유지하고 있으므로, 첫 단계는 이를 설정하는 것입니다.

```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt update
```

이제 MongoDB를 설치할 수 있습니다.

```shell
sudo apt-get install -y mongodb-org
```

기본적으로 MongoDB는 실행 중이 아니고 부팅 시 자동 시작도 설정되어 있지 않으므로, 이를 설정합니다.

```shell
sudo systemctl start mongod
sudo systemctl enable mongod
```

### redis 설치

위 Mongo 예시와 마찬가지로 배포판의 redis 버전은 매우 오래되었습니다. 다만 이 경우에는 프로젝트의 공식 apt 저장소 대신 PPA를 사용할 수 있습니다. 이 PPA는 잘 유지보수되고 있으며, redis 개발자들에게 “공인(blessed)”되기도 했습니다.

`software-properties-common` 패키지는 `add-apt-repository`를 제공하며, 이를 통해 PPA 설정을 위한 여러 수동 단계를 생략할 수 있습니다.

```bash
sudo apt install software-properties-common
sudo add-apt-repository ppa:chris-lea/redis-server
sudo apt update
sudo apt install redis-server
```

이것으로 끝입니다. redis 서버는 설정이 매우 단순하며, apt 패키지가 실행 유지까지 처리해 줍니다.

## Screeps 서버

### Screeps 유저 생성

다음 단계에서는 새 유저 `screeps`를 만들고, 그 유저/그룹 아래에 서버를 설정할 것입니다. 이 유저는 sudo 권한도 필요 없고 로그인도 하지 않을 것이므로, 비밀번호 없이 생성합니다.

```shell
sudo adduser --disabled-password --gecos "" screeps
```

다음으로 해당 유저로 전환해 나머지 설정을 진행합니다. 유저로 직접 로그인할 수 없으므로 `su` 명령으로 유저를 전환해야 합니다. 디버깅하거나 서버에 새 모드를 설치하는 등, screeps 유저로 작업해야 할 때마다 이 방식을 사용하면 됩니다.

```shell
sudo su screeps
```

### 서버 환경 설정

사전 준비와 유저 생성이 끝났으니, 월드를 위한 전용 서버 환경을 구성합니다.

이 단계에서는 Steam API Key가 필요하며, [여기](https://steamcommunity.com/dev/apikey)에서 무료로 받을 수 있습니다.

```shell
mkdir ~/world
cd ~/world
npm install screeps
npx screeps init
```

`init` 호출은 `.screepsrc`에 서버 설정을 생성합니다. 이 파일은 문서화가 잘 되어 있으니 한 번 읽어보는 것이 좋습니다. 일반적으로 변경하고 싶을 만한 값은 `runners_cnt`와 `processors_cnt` 정도입니다. 작은 시스템(2코어)에서는 이를 사용 가능한 CPU 코어 수로 설정하는 것이 좋지만, 큰 시스템에서는 MongoDB를 위해 1~2코어를 남겨두는 편이 좋을 수 있습니다. 같은 서버에서 여러 월드를 돌린다면, 각 서버의 `runners_cnt` 합과 `processors_cnt` 합이 시스템의 프로세서 수를 초과하지 않도록 제한해야 합니다.

### 서버 모드 설치

새 백엔드를 활성화하고 서버 사용/관리를 쉽게 하기 위해 몇 가지 모드를 설치합니다.

* [screepsmod-mongo](https://github.com/ScreepsMods/screepsmod-mongo)는 LokiJS 기반 저장소를 mongodb+redis 솔루션으로 대체합니다.
* [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth)는 플레이어가 서드파티 도구로 서버에 로그인할 때 사용할 수 있는 비밀번호를 설정할 수 있게 해줍니다.
* [screepsmod-tickrate](https://github.com/ScreepsMods/screepsmod-tickrate)는 screeps CLI에서 서버 관리자가 최소 틱 레이트를 즉시(on the fly) 변경할 수 있게 해줍니다.
* [screepsmod-admin-utils](https://github.com/ScreepsMods/screepsmod-admin-utils)는 screeps CLI에 유용한 함수들을 추가합니다.
* [screepsmod-features](https://github.com/ScreepsMods/screepsmod-features)는 서버가 지원하는 기능 목록을 노출합니다.

간단한 명령으로 모두 한 번에 설치할 수 있습니다(여전히 `screeps` 유저로 실행 중이어야 합니다).

```shell
npm install screepsmod-mongo screepsmod-auth screepsmod-tickrate screepsmod-admin-utils screepsmod-features
```

그 다음 `mods.json` 파일이 아래와 같은지 확인하세요.

```json
{
  "mods": [
    "node_modules/screepsmod-mongo/index.js",
    "node_modules/screepsmod-auth/index.js",
    "node_modules/screepsmod-tickrate/index.js",
    "node_modules/screepsmod-admin-utils/index.js",
    "node_modules/screepsmod-features/index.js"
  ],
  "bots": {
    "simplebot": "node_modules/@screeps/simplebot/src"
  }
}
```

### 데이터베이스 초기화

기본 저장 엔진에서 바꿨기 때문에 새 데이터베이스를 초기화해야 합니다.

터미널 하나에서 Screeps 서버를 수동으로 시작합니다. 이때도 `screeps` 유저로 실행해야 합니다.

```bash
cd ~/world
npx screeps start
```

다른 터미널에서 Screeps CLI를 열고 데이터를 리셋합니다.

```bash
sudo su screeps
cd ~/world
npx screeps cli
> system.resetAllData()
```

이제 첫 번째 터미널의 Screeps 서버 프로세스를 중지합니다.

이것이 `screeps` 유저로 할 마지막 작업일 것이므로, 메인 유저로 돌아갑니다.

```bash
exit
```

### 서비스 설정

이제 동작하는 Screeps 서버가 준비됐으니, 재부팅을 포함해 계속 실행되도록 설정합니다. Ubuntu 16에서는 간단한 systemd 서비스 파일로 처리할 수 있습니다.

루트 유저(`screeps`가 아님)로 `/etc/systemd/system/screeps-world.service`를 여세요.

```shell
sudo nano /etc/systemd/system/screeps-world.service
```

아래 내용을 넣습니다.

```ini
[Unit]
Description=Screeps Server (world)
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
WorkingDirectory=/home/screeps/world
ExecStart=/home/screeps/world/node_modules/screeps/bin/screeps.js start
User=screeps
Group=screeps

[Install]
WantedBy=multi-user.target
```

이는 Screeps 서버가 네트워킹을 필요로 한다는 점, `screeps` 유저/그룹으로 실행되어야 한다는 점, 시작 디렉터리, 그리고 실행 명령을 systemd에 알려줍니다.

systemd가 새로 만든 서비스를 로드하도록 해야 합니다.

```shell
sudo systemctl daemon-reload
```

이제 서버를 시작하고, 부팅 시 자동 시작하도록 설정할 수 있습니다.

```shell
sudo systemctl start screeps-world
sudo systemctl enable screeps-world
```

