import 'aframe';

//file imports to squeeze through the juicer

import '../../index.html';
import '../styles/app.scss';



//We want to use your camera


const startCamera = () => {
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia ||  navigator.webkitGetUserMedia || navigator.msGetUserMedia;
    if (!navigator.getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));

    }

		navigator.mediaDevices
		 .getUserMedia({
		 	video: true, 
		 	facingMode: "environment"
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
	}

startCamera();