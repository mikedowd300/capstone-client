angular.module('app')
  .component ('login', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

    },
    templateUrl: 'app/components/login/template.html',
    bindings: {
      user: "=",
      page: "="
    }
  })
