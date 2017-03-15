angular.module('app')
  .component ('adminPage', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

    },
    templateUrl: 'app/components/admin.page/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
      }
  })
