angular.module('app')
  .component ('adminPage', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {

      }

      vm.searchByAuthor = function() {
        $http.get(`http://localhost:3000/sounds/author/:${vm.author}`)
        .then(function(data) {
          console.log(data.data);
        });
      }

      vm.searchByGenre = function() {
        $http.get(`http://localhost:3000/sounds/genre/:${vm.genre}`)
        .then(function(data) {
          console.log(data.data);
        });
      }

      vm.searchByName = function() {
        $http.get(`http://localhost:3000/sounds/name/:${vm.name}`)
        .then(function(data) {
          console.log(data.data);
        });
      }

    },
    templateUrl: 'app/components/admin.page/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
      }
  })