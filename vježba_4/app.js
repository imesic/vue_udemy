new Vue({
  el: '#exercise',
  data: {
    dodajKlasu: {
      highlight: false,
      shrink: true,
    },
    emptyClass: 'ceca',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progress: {
      width: '0%',
      height: '100%',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.dodajKlasu.highlight = !vm.dodajKlasu.highlight;
        vm.dodajKlasu.shrink = !vm.dodajKlasu.shrink;
      }, 2000);
    },
    startProgress: function() {
      return {
        width: this.myStyle.width + 'px',
        height: this.myStyle.height + 'px',
        backgroundColor: this.myStyle.backgroundColor
      }
    },
    increaseProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 1;
        if (width <= 100) {
          vm.progress.width = width + '%';
        }
        else {
          this.setInterval.stop;
        }
      }, 50);
    }
  },
  computed: {
    attachStyle: function() {
      return {
        width: this.width + 'px',
        backgroundColor: this.color,
        height: this.height + 'px'
      }
    },
  }
});
