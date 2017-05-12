new Vue({
    el: '#vue-app',
     data: {
        name: 'Eko Teguh Widodo',
        job: 'Software Engineer at BPS'
     },
    methods: {
        greeting: function (time){
            return 'Selamat ' + time
        },
        myName: function () {
            return this.name
        },
        myJob: function () {
            return this.job
        }
    }
});
