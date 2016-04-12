(function() {
  'use strict';

  angular
    .module('ngGlobalization')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$translate) {
    var vm = this;
    //var currentLanguage = 0;
    vm.awesomeThings = [];
    vm.langArray = [{"lcode":"en"},{"lcode":"de"}];
    vm.selected = vm.langArray[0];
    vm.classAnimation = '';
    vm.creationDate = 1460390357513;
    vm.showToastr = showToastr;
    vm.switchLang = switchLang;
// switch language array
//var langArray = ['en','de','nothing'];

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

function switchLang(key) {
    //currentLanguage = (currentLanguage+1) % langArray.length;
   key = key || vm.selected.lcode;
    //$translate.use(langArray[currentLanguage]);
    $translate.use(key);
   //showToastr(langArray[currentLanguage]);
}

    function showToastr(key) {
        toastr.info(key);
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
