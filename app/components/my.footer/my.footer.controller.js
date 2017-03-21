angular.module('app')
  .component ('myFooter', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

    },
    templateUrl: 'app/components/my.footer/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
