module.exports = {
  server: {
    baseDir: "public",
    middleware: [
      function(req, res, next) {
        if (req.url === "/" || req.url === "/index.html") {
          res.writeHead(302, { Location: "/index.ko.html" });
          res.end();
          return;
        }

        if (req.url === "/api/" || req.url === "/api/index.html") {
          res.writeHead(302, { Location: "/api/index.ko.html" });
          res.end();
          return;
        }

        next();
      }
    ]
  },
  files: ["public/**.*"],
  port: 3000,
  host: "0.0.0.0",
  open: false,
  ui: false
};
