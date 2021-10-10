const myApp1 = {
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
const app = Vue.createApp(myApp1);
app.mount('#section')

let logs = document.querySelector('.right-menu-in')
let num = 0
let num2 = 1
logs.addEventListener('click',()=>{
  let arr = ['img/logo1.svg','img/logo2.svg']
  let arrcolor = ['green','white']
  num++
  logs.style = `background-image:url(${arr[num]});
                background-color:${arrcolor[num]};`
  if(num >= 1){
    num = -1}

num2++

let logo = document.querySelectorAll('.bg')

if(num2 === 2){
  logo.forEach((l)=>{
    l.classList = 'bg bg-logos'
  })
  num2 = 0
}


if(num2 === 1){
  logo.forEach((l)=>{
    l.classList = 'bg linear'
  })
}


})