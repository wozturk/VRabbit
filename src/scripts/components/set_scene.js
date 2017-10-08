AFRAME.registerComponent('set-scene', {
	schema: {
		on: {type: 'string'},
		target: {type:'selector'},
		src: {type: 'string'},
		dur: {type: 'number', default: 300 }

	},
	init: function() {

		let data = this.data,
				el = this.el;
		    el.addEventListener(data.on, function () {
		        data.target.setAttribute('environment', 'preset', data.src);
		        let video =  document.querySelector('#camera-bg');
				 		video.srcObject.getTracks().forEach(track => track.stop());
						video.srcObject = null;
		    });
	}
});
