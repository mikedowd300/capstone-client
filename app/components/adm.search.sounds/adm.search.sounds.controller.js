angular.module('app')
  .component ('admSearchSounds', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

    },
    templateUrl: 'app/components/adm.search.sounds/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
