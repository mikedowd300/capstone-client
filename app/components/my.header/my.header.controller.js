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

    },
    templateUrl: 'app/components/my.header/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
