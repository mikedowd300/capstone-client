angular.module('app')
  .component ('admSearchUrls', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {
        vm.urls = [];
        vm.showDisplay = false;
      }

      vm.getUrls = function() {
        console.log(vm.searchBy);
        vm.showDisplay = true;
        $http.get(`http://localhost:3000/featuredurls/:${vm.searchBy}`)
        .then(function(data) {
          vm.urls = data.data;
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
