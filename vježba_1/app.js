new Vue ({
    el: '#exercise',
    data: {
        name: 'Tiha',
        age: 25,
        link: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/black-chiweenie-royalty-free-image-511504986-1563378924.jpg?crop=0.887xw:1.00xh;0.0196xw,0&resize=640:*',
        x: 0,
        y: 0,
        pxcounter: 0
    },
    methods: {
        triPutaGodine: function() {
            return this.age * 3;
        },
        updejtajKoordinate: function(event) {
            this.pxcounter = event.clientX;
        }
    },
    computed: {
        randomBroj: function() {
            return Math.random();
        },
    }
})