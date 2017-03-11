angular.module('app')
  .component ('signUp', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

    },
    templateUrl: 'app/components/sign.up/template.html',
    bindings: {
      user: "=",
      page: "="
    }
  })
