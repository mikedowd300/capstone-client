angular.module('app')
  .component ('mySound', {
    controller: function() {
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
        let str = `sound-${sound.id}`
        var audio = document.getElementById(str);
        audio.play();
      }

      vm.copy = function(sound) {
        let str = `copy-${sound.id}`;
        var copySelection = document.getElementById(str);
        copySelection.focus();
        copySelection.select();
        document.execCommand('copy');
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
