new Vue ({
    el:'#app',
    data: {
        prikvaciCrvenu: false
    },
    methods: {
        divKlase: function() {
            return {
                red: this.prikvaciCrvenu,
                blue: !this.prikvaciCrvenu
            }
        }
    }
    // data: {
    //     attachRed: false,
    //     color: 'green',
    //     width: 100,
    //     counter: 0
    // },
    // computed: {
    //     divClasses: function() {
    //         return {
    //             red: this.attachRed,
    //             blue: !this.attachRed
    //         };
    //     },
    //     myStyle: function() {
    //         return {
    //             'background-color': this.color,
    //             width: this.width + 'px' 
    //         };
    //     },
    //     povečajPx: function() {
    //         return {
    //             width: this.counter + 'px'
    //         };
    //     }
    // }
});