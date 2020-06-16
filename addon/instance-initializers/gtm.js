export function initialize(application) {
  // Do not inject anythin in the router if appId is not present
  var environment = application.resolveRegistration('config:environment') || {};
  var config = environment.googleTagManager;
  var appId = config && config.appId;
  if (!appId) {
    return;
  }

  var router = application.lookup('service:router');
  var gtm = application.lookup('service:gtm');

  router.on('routeDidChange', function() {
    gtm.trackPageView(this.currentURL);
  });
}

export default {
  name: 'gtm',
  initialize: initialize
};
