import { initialize } from '../../../instance-initializers/gtm';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';
import Application from '@ember/application';

var registry, application;

module('Unit | Initializer | gtm', {
  beforeEach: function() {
    run(function() {
      application = Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(registry, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
