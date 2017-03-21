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
          login: false,
          signup: false
        };
        vm.global = {
          madeSearch: false,
          title: 'EarByter.com',
          url: 'https://earbyter.herokuapp.com/'
          // url: `http://localhost:3000/`
        };

      }

    },
    templateUrl: 'app/components/initial/template.html'
  })
