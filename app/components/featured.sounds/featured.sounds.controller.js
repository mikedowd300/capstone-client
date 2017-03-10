angular.module('app')
  .component ('featuredSounds', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {

        $http.get(`http://localhost:3000/sounds/featured`)
        .then(function(data) {
          vm.sounds = data.data;
        });

      }

      vm.play= function(sound) {
        let str = `sound-${sound.id}`
        var audio = document.getElementById(str);
        audio.play();
      }

    },
    templateUrl: 'app/components/featured.sounds/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
