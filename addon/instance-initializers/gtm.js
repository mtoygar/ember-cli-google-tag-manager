export function initialize(application) {
  // Do not inject anythin in the router if appId is not present
  var environment = application.resolveRegistration('config:environment') || {};
  var config = environment.googleTagManager;
  var appId = config && config.appId;
  if (!appId) {
    return;
  }

  var router = application.lookup('router:main');
  var gtm = application.lookup('service:gtm');

  router.on('didTransition', function () {
    gtm.trackPageView(this.get('url'));
  });
}

export default {
  name: 'gtm',
  initialize: initialize
};
