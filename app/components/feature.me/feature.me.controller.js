angular.module('app')
  .component ('featureMe', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {
        vm.showMessage = false;
      }

      vm.showTrue = function() {
        vm.showMessage = true;
      }

      vm.showFalse = function() {
        vm.showMessage = false;
      }

      vm.featureThis = function() {
        vm.featureURL.member_id = vm.user.id;
        $http.post(`http://localhost:3000/featuredurls`, vm.featureURL)
        .then (function(data) {
          vm.featureURL.url = '';
        }, function() {
          console.log('OOPs, it didnt join the DB!');
        });
      }

      // vm.logIn = function() {
      //   $http.post(`http://localhost:3000/members/login`, vm.login)
      //   .then(function(data) {
      //     console.log(data);
      //   }, function() {
      //     console.log('Login Failed!');
      //   });
      // }


    },
    templateUrl: 'app/components/feature.me/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
