new Vue({
    el: '#vue-app',
       data:  {
        umur: 28,
        x: 0,
        y: 0
     },
     methods: {
        tambahTahun: function (){
            return this.umur++
        },
        kurangTahun: function (){
            return this.umur--
        },
        updateXY: function (event){
            //console.log(event)
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
});
