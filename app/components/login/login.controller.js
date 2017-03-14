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
        vm.page.signup = false;
      }

      vm.logIn = function() {
        $http.post(`http://localhost:3000/members/login`, vm.login)
        .then(function(data) {
          vm.page.login = false;
          vm.user = data.data;
          vm.user.email = vm.login.email;
          vm.page.landing = false;
          if(vm.user.type === 'member') {
            vm.page.members = true;
            vm.global.title = `Welcome ${vm.user.email}!`;
         }
          if(vm.user.type === 'admin') {
            vm.page.admin = true;
            vm.global.title = 'Admin Page';
          }
        },
        function() {
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
