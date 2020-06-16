import Service from '@ember/service';

// https://gist.github.com/pwfisher/5fd09ec2ccab253008f9
// Helpers for Google Tag Manager
export default Service.extend({
  init() {
    this._super(...arguments);

    this.defaultEvent = this.defaultEvent || {
      event: 'trackEvent',
      eventCategory: '',
      eventAction: '',
      eventLabel: '',
      eventValue: ''
    };
    this.defaultPageView = this.defaultPageView || { event: 'vpv', virtualPagePath: '' };
    this.commonFields = this.commonFields || {};
  },

  addCommonField: function (key, value) {
    this.commonFields[key] = value;
  },

  removeCommonField: function (key) {
    delete this.commonFields[key];
  },

  createPayload: function (type, o) {
    var data = o || {};
    var defaultPayload = this['default' + type];
    var payload = {};
    Object.keys(defaultPayload).forEach(function (key) {
      payload[key] = data.hasOwnProperty(key) ? data[key] : defaultPayload[key];
    });
    Object.keys(this.commonFields).forEach((key) => {
      payload[key] = this.commonFields[key];
    });
    return payload;
  },

  trackEvent: function (o) {
    window.dataLayer.push(this.createPayload('Event', o));
  },

  trackPageView: function (path) {
    window.dataLayer.push(this.createPayload('PageView', { virtualPagePath: path }));
  }
});
