(function() {
  'use strict';

  angular
    .module('ngGlobalization')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
