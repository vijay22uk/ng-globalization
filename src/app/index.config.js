(function() {
  'use strict';
angular
    .module('ngGlobalization')
    .factory('myCustomHandlerFactory', function (dep1, dep2) {
        debugger;
  // has to return a function which gets a tranlation ID
  return function (translationID) {
      "No value found for key "+translationID;
    // do something with dep1 and dep2
  };
});

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
  
  // loading files async
  $translateProvider.useStaticFilesLoader({
    prefix: 'assets/language/locale-',
    suffix: '.json'
}); 
  
   $translateProvider.useMissingTranslationHandler('myCustomHandlerFactory');
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.preferredLanguage('en');
  
}

})();
