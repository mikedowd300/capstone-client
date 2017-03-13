angular.module('app')
  .component ('memberPage', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

      }

    },
    templateUrl: 'app/components/member.page/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
