'use strict';

var _ = require('lodash');

function buildPageMap(pages, lang) {
  var enPages = {};
  var koPages = {};

  pages.forEach(function(page) {
    var source = page.source || '';

    if (/\.ko\.md$/.test(source)) {
      koPages[source.replace(/\.ko\.md$/, '.md')] = page.content;
      return;
    }

    enPages[source] = page.content;
  });

  if (lang === 'ko') {
    return _.assign({}, enPages, koPages);
  }

  return enPages;
}

hexo.extend.generator.register('index', function(locals) {
  var pages = locals.pages.data || [];

  return [
    {
      path: 'index.html',
      layout: 'index',
      data: {
        pages: buildPageMap(pages, 'en'),
        ui_lang: 'en'
      }
    },
    {
      path: 'index.ko.html',
      layout: 'index',
      data: {
        pages: buildPageMap(pages, 'ko'),
        ui_lang: 'ko'
      }
    }
  ];
});
