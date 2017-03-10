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
          vm.sounds = data.data;
          vm.global.madeSearch = true;
        });
      }

      vm.play= function(sound) {
        let str = `sound-${sound.id}`
        var audio = document.getElementById(str);
        audio.play();
      }

    },
    templateUrl: 'app/components/search/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
