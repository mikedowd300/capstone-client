angular.module('app')
  .component ('admDisplayUrls', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {

      }

      vm.toggleIsFeatured = function(url) {
        url.isFeatured = !url.isFeatured;
        $http.put(`${vm.global.url}featuredurls`, url)
        .then(function(data) {
          // console.log(data);
        });
      }

    },
    templateUrl: 'app/components/adm.display.urls/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "=",
      urls: "="
    }
  })
