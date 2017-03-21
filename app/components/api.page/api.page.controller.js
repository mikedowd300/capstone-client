angular.module('app')
  .component ('apiPage', {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {
        vm.htmlStr1 = '<audio id="sound-${soundArray[i].id || soundArray[i].sound_id}">';
        vm.htmlStr2 = '    <source src="${soundArray[i].url}"  type="audio/mpeg">';
        vm.htmlStr3 = '</audio>';
      }

    },
    templateUrl: 'app/components/api.page/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
