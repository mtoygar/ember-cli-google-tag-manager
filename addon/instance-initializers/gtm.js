export function initialize(application) {
  // Do not inject anythin in the router if appId is not present
  var container = application.container;
  var environment = container.lookupFactory('config:environment') || {};
  var config = environment.googleTagManager;
  var appId = config && config.appId;
  if (!appId) {
    return;
  }

  var router = container.lookup('router:main');
  var gtm = container.lookup('service:gtm');

  router.on('didTransition', function () {
    gtm.trackPageView(this.get('url'));
  });
}

export default {
  name: 'gtm',
  initialize: initialize
};
