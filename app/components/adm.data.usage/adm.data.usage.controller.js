angular.module('app')
  .component ('admDataUsage', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {
        vm.allData = '';
      }

      vm.getTotalData = function() {
        $http.post(`${vm.global.url}sounds/datausage`, {password: vm.user.password})
        .then(function(data) {
          vm.allData = `${Math.round(data.data/1024)}KB`;
        });
      }

    },
    templateUrl: 'app/components/adm.data.usage/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
