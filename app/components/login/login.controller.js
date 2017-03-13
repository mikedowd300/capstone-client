angular.module('app')
  .component ('login', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {

      }

      vm.loginTrue = function() {
        vm.page.login = true;
      }

      vm.loginFalse = function() {
        vm.page.login = false;
      }

      vm.logIn = function() {
        $http.post(`http://localhost:3000/members/login`, vm.login)
        .then(function(data) {
          console.log(data);
        }, function() {
          console.log('Login Failed!');
        });
      }

    },
    templateUrl: 'app/components/login/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
