new Vue ({
    el:'#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function() {
            console.log('Computed');
            if (this.counter > 5) {
                return 'Veće od 5'
            }
            else {
                return 'Manje od 5';
            }
        }
    },
    watch: {
        counter: function () {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function() {
            console.log('Method');
            if (this.counter > 5) {
                return 'Veće od 5'
            }
            else {
                return 'Manje od 5';
            }
        }
    }
})