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
        $http.post(`${vm.global.url}featuredurls`, vm.featureURL)
        .then (function(data) {
          vm.featureURL.url = '';
        }, function() {
          console.log('OOPs, it didnt join the DB!');
        });
      }

    },
    templateUrl: 'app/components/feature.me/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
