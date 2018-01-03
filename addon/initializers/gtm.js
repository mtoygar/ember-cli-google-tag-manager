import environment from "../../config/environment"

export function initialize(container /*, application */) {
  // Do not inject anythin in the router if appId is not present
  config = environment.googleTagManager
  appId = config && config.appId
  if (!appId) {
    return
  }

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
