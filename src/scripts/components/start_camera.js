AFRAME.registerComponent('start-camera', {
    schema: {
      on: {type: 'string'},
      scene: {type:'selector'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener(data.on, () => {
          data.scene.setAttribute('environment', 'active', false);
          navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia ||  navigator.webkitGetUserMedia || navigator.msGetUserMedia;
          if (!navigator.getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
          }
          navigator.mediaDevices
           .getUserMedia({
            video: {
              facingMode: {
                exact: 'environment'}
              }
            })
          .then(function(stream) {
            console.log('hooray');
              const video =  document.querySelector('#camera-bg');
              video.srcObject = stream;
              video.onloadedmetadata = e => {
              video.play();
            };
          })
          .catch(function(error) {
          });
      });
    }
  });