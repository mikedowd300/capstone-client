angular.module('app')
  .component ('initial', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {

        vm.user = {},
        vm.page = {
          landing: true,
          members: false,
          api: false,
          admin: false,
        }

      }
      
    },
    templateUrl: 'app/components/initial/template.html'
  })
