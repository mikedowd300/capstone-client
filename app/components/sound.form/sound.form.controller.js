angular.module('app')
  .component ('soundForm', {
    controller: function($http) {
      const vm = this;

      vm.$onInit = function() {

        vm.isPutable = false;
        vm.sound = {};

        document.getElementById('file-input').addEventListener('change', function() {
          console.log('in the event listener');
          const files = document.getElementById('file-input').files;
          const file = files[0];
          if(file == null){
            return alert('No file selected.');
          }
          vm.getSignedRequest(file);
        });

      };

      vm.putSound = function() {
        if(vm.isPutable) {
          vm.uploadFile(vm.awsFile, vm.awsUrl, vm.sound.url)
          vm.sound.isFeatured = false;
          vm.sound.member_id = vm.user.id;
          $http.post('http://localhost:3000/sounds', vm.sound)
          .then(function() {
            vm.user.sounds.push(vm.sound);
          }, function() {
            console.log('The sound did NOT post');
          })
        }else {
          console.log(false);
        }
        vm.isPutable = false;
      }

      vm.getSignedRequest = function(file){
        console.log('getSignedRequest');
        $http.get(`http://localhost:3000/api/sign-s3?file-name=${file.name}&file-type=${file.type}`)
        .then(function(data) {
          vm.awsUrl = data.data.signedRequest;
          vm.sound.url = data.data.url;
          vm.awsFile = file;
          vm.sound.mem_size = vm.awsFile.size;
          vm.isPutable = true;
        })
      }

      vm.uploadFile = function(file, signedRequest, url){
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
          if(xhr.readyState === 4){
            if(xhr.status === 200){
              vm.myUrl = url;
            }
            else{
              alert('Could not upload file.');
            }
          }
        };
        xhr.send(file);
      }

    },
    templateUrl: 'app/components/sound.form/template.html',
    bindings: {
      user: "=",
      page: "=",
      global: "="
    }
  })
