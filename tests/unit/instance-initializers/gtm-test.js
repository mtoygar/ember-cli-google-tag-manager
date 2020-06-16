import { initialize } from '../../../instance-initializers/gtm';
import { module, test } from 'qunit';
import { run } from '@ember/runloop';
import Application from '@ember/application';

let application;

module('Unit | Initializer | gtm', {
  beforeEach: function() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
