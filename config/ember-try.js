module.exports = function() {
  return {
    useYarn: true,
    scenarios: [
      {
        name: 'Ember 1.10 with ember-data',

        /*
          `command` can also be overridden at the scenario level.
        */
        command: 'ember test --filter ember-1-10',
        bower: {
          dependencies: {
            'ember': '1.10.0',
            'ember-data': '1.0.0-beta.15'
          }
        },
        /*
          When writing scenarios that depend upon ember versions supplied by bower, you must explictly remove the
          npm ember-source dependency if your addon defines an ember-source in its own package.json devDependencies
        */
        npm: {
          devDependencies: {
            'ember-source': null
          }
        }
      },
      {
        name: 'Ember 2.11.0',
        /*
          `env` can be set per scenario, with environment variables to set for the command being run.
          This will be merged with process.env
       */
        env: {
          ENABLE_NEW_DASHBOARD: true
        },
        npm: {
          devDependencies: {
            'ember-source': '2.11.0'
          },
          /*
            When `useYarn` is true, you can optionally define yarn resolutions to enforce a
            specific dependency version to be installed. This is useful if other libraries
            you depend on include different versions of a package.
          */
          resolutions: {
            'lodash': '5.0.0'
          }
          /*
            In order to easily test multiple editions ember-try merges any `ember` property specified
            into the applications `package.json`. Values specified in the ember-try configuration will
            override values that pre-existed in the original `package.json`.
          */
          ember: {
            'edition': 'octane'
          }
        }
      },
      {
        name: 'Ember canary with Ember-Data 2.3.0',
        /*
          `allowedToFail` - If true, if this scenario fails it will not fail the entire try command.
        */
        allowedToFail: true,
        npm: {
          devDependencies: {
            'ember-data': '2.3.0',

            // you can remove any package by marking `null`
            'some-optional-package': null
          }
        },
        bower: {
          dependencies: {
            'ember': 'components/ember#canary'
          },
          resolutions: {
            'ember': 'canary'
          }
        }
      },
      {
        name: 'Ember beta',
        bower: {
          dependencies: {
            'ember': 'components/ember#beta'
          },
          resolutions: { // Resolutions are only necessary when they do not match the version specified in `dependencies`
            'ember': 'beta'
          }
        }
      }
    ]
  }
};
