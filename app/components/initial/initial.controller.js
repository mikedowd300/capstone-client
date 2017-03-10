angular.module('app')
  .component ('initial', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

        vm.user = {};
        vm.page = {
          landing: true,
          members: false,
          api: false,
          admin: false,
        };
        vm.global = {
          madeSearch: false
        };

      }

    },
    templateUrl: 'app/components/initial/template.html'
  })
