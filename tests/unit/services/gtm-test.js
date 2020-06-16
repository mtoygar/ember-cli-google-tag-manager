import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | Flash', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:gtm');
    assert.ok(service);
  });

  test('it should add common fields in all payloads', function(assert) {
    let service = this.owner.lookup('service:gtm');
    window.dataLayer = [];
    service.addCommonField("userId", "1");

    service.trackEvent();
    assert.equal(window.dataLayer.length, 1);
    let e = window.dataLayer[0];
    assert.equal(e.userId, "1");

    window.dataLayer = [];
    service.removeCommonField("userId");

    service.trackEvent();
    assert.equal(window.dataLayer.length, 1);
    e = window.dataLayer[0];
    assert.equal(e.userId, undefined);
  });
});
