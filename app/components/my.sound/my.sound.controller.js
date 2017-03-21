angular.module('app')
  .component ('mySound', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {
        vm.showMessages = false;
      }

      vm.showTrue = function() {
        vm.showMessages = true;
      }

      vm.showFalse = function() {
        vm.showMessages = false;
      }

      vm.play= function(sound) {
        let str = `sound-${sound.id || sound.sound_id}`;
        var audio = document.getElementById(str);
        audio.play();
      }

      vm.copy = function(sound) {
        let str = `copy-${sound.id || sound.sound_id}`;
        var copySelection = document.getElementById(str);
        copySelection.focus();
        copySelection.select();
        document.execCommand('copy');
      }

      vm.toggleIsFeatured = function(sound) {
        sound.isFeatured = !sound.isFeatured;
        sound.password = vm.user.password;
        sound.id = sound.id || sound.sound_id;
        $http.put(`${vm.global.url}sounds`, sound)
        .then(function(data) {
          console.log(data);
        });
      }

    },
    templateUrl: 'app/components/my.sound/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "=",
      sound: "="
    }
  })
