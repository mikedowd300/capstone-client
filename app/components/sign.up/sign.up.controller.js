angular.module('app')
  .component ('signUp', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {
        vm.inputError = false;
      }

      vm.signUpTrue = function() {
        vm.page.signup = true;
        vm.page.login = true;
      }

      vm.signUpFalse = function() {
        vm.page.signup = false;
        vm.inputError = false;
      }

      vm.logIn = function() {
        $http.post(`${vm.global.url}members/login`, vm.login)
        .then(function(data) {
          console.log(data);
        }, function() {
          console.log('Login Failed!');
        });
      }

      vm.submitSignUpForm = function() {
        $http.post(`${vm.global.url}members/signup`, vm.signUp)
        .then(function(data) {
          if(data.data === 'used'){
            vm.inputError = true;
            vm.signUp.email = '';
            vm.signUp.password = '';
          } else {
            vm.inputError = false;
            $http.post(`${vm.global.url}members/login`, vm.signUp)
            .then(function(datb) {
              vm.user = datb.data;
              vm.page.members = true;
              vm.page.api = false;
              vm.page.admin = false;
              vm.page.landing = false;
              vm.page.login = false;
              vm.page.signup = false;
            }, function() {
              console.log('Signup Failed!');
            });
          }
        })
     }

     vm.tryAgain = function() {
       vm.page.signup = true;
       vm.inputError = false;
     }

    },
    templateUrl: 'app/components/sign.up/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
