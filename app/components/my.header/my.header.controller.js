angular.module('app')
  .component ('myHeader', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {
        if(vm.page.landing) vm.title = 'EarByter.com';
        if (vm.page.members) vm.title = `Welcome ${user.email}!`;
        if (vm.page.api) vm.title = 'Checkout the EarByter API';
        if (vm.page.admin) vm.title = 'Admin';
      }

    },
    templateUrl: 'app/components/my.header/template.html',
    bindings: {
      user: "=",
      page: "="
    }
  })