AFRAME.registerComponent('scale-on-mouseenter', {
    schema: {
      to: {default: '2.5 2.5 2.5'}
    },
    init: function () {
      var data = this.data;
      this.el.addEventListener('mouseenter', function () {
        this.setAttribute('scale', data.to);
      });
    }
  });

//now this can be used as an attribute
//scale-on-mouseenter="to: 2.2 2.2 2.2"