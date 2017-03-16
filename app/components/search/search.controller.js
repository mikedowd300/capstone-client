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
          vm.searchTerm = '';
        });
      }

      vm.play = function(sound) {
        let str = `sound-${sound.id}`
        var audio = document.getElementById(str);
        audio.play();
      }

      vm.copy = function(sound) {
        let str = `copy-${sound.id}`;
        var copySelection = document.getElementById(str);
        copySelection.select();
        document.execCommand('copy');
      }

    },
    templateUrl: 'app/components/search/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
