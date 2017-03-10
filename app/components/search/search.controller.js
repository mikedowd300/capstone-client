angular.module('app')
  .component ('search', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {
        vm.sounds = [];
      }

      vm.doSearch = function() {
        $http.get(`http://localhost:3000/sounds/${vm.searchTerm}`)
        .then(function(data) {
          console.log(data);
          console.log(vm.searchTerm);
        });
      }

    },
    templateUrl: 'app/components/search/template.html',
    bindings: {
      user: "=",
      page: "="
    }
  })