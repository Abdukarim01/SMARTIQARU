const myApp = {
  data(){
    return{
      nav:false
    }
  },
  methods:{
      open:function(){
        this.nav = true
      },
      close:function(){
        this.nav = false
      }
  }
};
const app = Vue.createApp(myApp);
app.mount('#section')
