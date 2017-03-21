angular.module('app')
  .component ('featuredSites', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {

        $http.get(`${vm.global.url}featuredurls`)
        .then(function(data) {
          vm.urls = data.data;
          vm.urls.forEach(function(url) {
            url.name = url.url.split('//')[1];
          });
        });
      }

    },
    templateUrl: 'app/components/featured.sites/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
