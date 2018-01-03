// https://gist.github.com/pwfisher/5fd09ec2ccab253008f9
// Helpers for Google Tag Manager

window.App.Gtm = {
  defaultEvent: {
    event: 'trackEvent',
    eventCategory: '',
    eventAction: '',
    eventLabel: '',
    eventValue: ''
  },

  defaultPageView: {
    event: 'vpv',
    virtualPagePath: ''
  },

  createPayload: function (type, o) {
    var data = o || {};
    var defaultPayload = this['default' + type];
    var payload = {};
    Object.keys(defaultPayload).forEach(function (key) {
      payload[key] = data.hasOwnProperty(key) ? data[key] : defaultPayload[key];
    });
    return payload;
  },

  trackEvent: function (o) {
    window.dataLayer.push(this.createPayload('Event', o));
  },

  trackPageView: function (path) {
    window.dataLayer.push(this.createPayload('PageView', { virtualPagePath: path }));
  }
};

export function initialize(container /*, application */) {
  var router = container.lookup('router:main');

  router.on('didTransition', function () {
    window.App.Gtm.trackPageView(this.get('url'));
  });
}

export default {
  name: 'gtm',
  initialize: initialize
};
