import { moduleFor, test } from 'ember-qunit';

moduleFor('service:gtm', 'Unit | Service | gtm', {
  integration: true
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var service = this.subject();
  assert.ok(service);
});

test('it should add common fields in all payloads', function(assert) {
  var service = this.subject();
  window.dataLayer = [];
  service.addCommonField("userId", "1");

  service.trackEvent();
  assert.equal(window.dataLayer.length, 1);
  var e = window.dataLayer[0];
  assert.equal(e.userId, "1");

  window.dataLayer = [];
  service.removeCommonField("userId");

  service.trackEvent();
  assert.equal(window.dataLayer.length, 1);
  e = window.dataLayer[0];
  assert.equal(e.userId, undefined);
});
