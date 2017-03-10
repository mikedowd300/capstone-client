angular.module('app')
  .component ('landingPage', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

    },
    templateUrl: 'app/components/landing.page/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
