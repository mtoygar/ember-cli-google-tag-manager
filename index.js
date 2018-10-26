/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-google-tag-manager',
  contentFor: function(type, config){
    var config = config['googleTagManager']
    var appId = config && config.appId
    var gtmAuth = config && config.gtmAuth
    var gtmPreview = config && config.gtmPreview
    var shouldRenderEnv = (gtmAuth && gtmPreview);

    if (!appId) {
      return ''
    }

    if (type === 'head'){
      if (shouldRenderEnv) {
        return "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl+" + "'&gtm_auth=" + gtmAuth + "&gtm_preview="+ gtmPreview + "&gtm_cookies_win=x'" + ";f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','" + appId + "');</script>";
      }

      return "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','" + appId + "');</script>";
    } else if (type === 'body'){
      if (shouldRenderEnv) {
        return '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + appId + '&gtm_auth=' + gtmAuth + '&gtm_preview=' + gtmPreview + '&gtm_cookies_win=x' + ' height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
      }
      return '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' + appId + ' height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    }
  }
};
