# Ember CLI google-tag-manager

Min Version 1.13.8

## Configuration

In `config/environment`

```javascript
var ENV = {
  // ...
  googleTagManager: {
    appId: process.env.GOOGLE_TAG_MANAGER_ID,
    gtmAuth: process.env.GOOGLE_TAG_MANAGER_AUTH, // optional
    gtmPreview: process.env.GOOGLE_TAG_MANAGER_PREVIEW // optional
  }
}
```

## Effects

The addon will inject the Google Tag Manager code in your `<head>` and `<body>`
as specified here:
[https://developers.google.com/tag-manager/quickstart](https://developers.google.com/tag-manager/quickstart)

Then addon plugs itself on the main router of the application and send a
`PageView` event after each successful transition.
