(function() {
  'use strict';

  angular
    .module('ngGlobalization')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig,$translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = true;
    /* inline setting language
    $translateProvider.translations('en', {
    'TITLE': 'Hello',
    'FOO': 'This is a paragraph'
  });
 
  $translateProvider.translations('de', {
    'TITLE': 'Hallo',
    'FOO': 'Dies ist ein Absatz'
  });
  */
 $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.preferredLanguage('en');
  
}

})();
