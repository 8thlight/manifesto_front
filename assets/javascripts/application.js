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
        { path: '/en', callbacks: function () { Manifesto.translate("en"); }},
        { path: '/zh-cn', callbacks: function () { Manifesto.translate("zh-cn"); }},
        { path: '/tr', callbacks: function () { Manifesto.translate("tr"); }},
        { path: '/es', callbacks: function () { Manifesto.translate("es"); }},

        { path: '/sign', callbacks: function () { Manifesto.toggleSignForm(); }},
        { path: '/reading', callbacks: function () { Manifesto.toggleReading(); }}
      ]
    });

    if (router.get('html5')) {
      router.upgrade();
    } else {
      router.dispatch();
    }
  });
});
