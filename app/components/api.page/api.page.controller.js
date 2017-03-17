angular.module('app')
  .component ('apiPage', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {
        console.log('I work');
      }

    },
    templateUrl: 'app/components/api.page/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
