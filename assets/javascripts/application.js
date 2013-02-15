$(document).ready(function() {
  Setup.init();
  Partials.init();
  Manifesto.init();

  YUI().use('router', function (Y) {
    var router = new Y.Router({
      html5: false,
      root : '/',

      routes: [
        { path: '/', callbacks: function () { Manifesto.translate("en"); }},
        { path: '/de', callbacks: function () { Manifesto.translate("de"); }},
        { path: '/en', callbacks: function () { Manifesto.translate("en"); }},
        { path: '/es', callbacks: function () { Manifesto.translate("es"); }},
        { path: '/zh-cn', callbacks: function () { Manifesto.translate("zh-cn"); }},
        { path: '/tr', callbacks: function () { Manifesto.translate("tr"); }},
        { path: '/reading', callbacks: function () { Manifesto.toggleReading(); }},
        { path: '/sign', callbacks: function () { Manifesto.toggleSignForm(); }},
        { path: '/:lang/confirmation/:id', callbacks: function (request) { Manifesto.confirmation(request.params); }}
      ]
    });

    if (router.get('html5')) {
      router.upgrade();
    } else {
      router.dispatch();
    }
  });
});
