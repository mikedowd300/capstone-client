angular.module('app')
  .component ('myHeader', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

      vm.showLogin = function() {
        vm.page.login = true;
      }

      vm.showSignUp = function() {
        vm.page.signup = true;
      }

      vm.showApi = function() {
        vm.page.api = true;
        vm.page.landing = false;
        vm.page.members = false;
        vm.page.admin = false;
        vm.page.login = false;
        vm.page.signup = false;
      }

      vm.showHome = function() {
        vm.page.api = false;
        vm.page.landing = true;
        vm.page.members = false;
        vm.page.admin = false;
        vm.page.login = false;
        vm.page.signup = false;
      }

    },
    templateUrl: 'app/components/my.header/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
