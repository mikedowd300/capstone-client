angular.module('app')
  .component ('signUp', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

      vm.signUpTrue = function() {
        vm.page.signup = true;
      }

      vm.signUpFalse = function() {
        vm.page.signup = false;
      }

      vm.signUp = function() {
        console.log('signUp');
      }

    },
    templateUrl: 'app/components/sign.up/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
    })
