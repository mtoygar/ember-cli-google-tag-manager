export function initialize(container /*, application */) {
  var router = container.lookup('router:main');
  var gtm = container.lookup('service:gtm')

  router.on('didTransition', function () {
    gtm.trackPageView(this.get('url'));
  });
}

export default {
  name: 'gtm',
  initialize: initialize
};
