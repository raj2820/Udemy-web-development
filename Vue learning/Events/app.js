const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmendName:''
    };
  },
  methods:{
    confirmInput(){
      this.confirmendName=this.name
  },
    submitFomr(){
      alert('Submitted')
    },
    setName(event,lastname){
      this.name = event.target.value +" "+lastname
    },
    add(num){
      this.counter=this.counter+num;
    },
    sub(num){
      this.counter=this.counter-num;
    }
  }
});

app.mount('#events');
