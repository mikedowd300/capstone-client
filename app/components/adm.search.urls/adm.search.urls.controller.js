angular.module('app')
  .component ('admSearchUrls', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {
        vm.urls = [];
        vm.showDisplay = false;
      }

      vm.getUrls = function() {
        vm.showDisplay = true;
        let obj = {
          searchBy: vm.searchBy,
          password: vm.user.password
        }
        $http.post(`${vm.global.url}featuredurls/filter`, obj)
        .then(function(data) {
          if(data.data != "PASSWORD FAILURE!") {
            vm.urls = data.data;
          }
        });
      }

    },
    templateUrl: 'app/components/adm.search.urls/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
