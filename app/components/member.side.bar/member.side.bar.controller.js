angular.module('app')
  .component ('memberSideBar', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {
      }

      vm.test = function() {
        console.log(vm.user.sounds);
      }

    },
    templateUrl: 'app/components/member.side.bar/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })