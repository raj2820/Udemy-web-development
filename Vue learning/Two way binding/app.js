const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  }
  ,
  watch:{

    name(value){
if(value === '')
      this.fullname = ''
else
      this.fullname=value +' '+'Shinde'
    }

  },computed:{
    // fullname(){
    //   if(this.name ===''){
    //     return ''
    //   }

    //   return this.name + ' '+'Shinde'
    // },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },resetInput(){
      this.name='';
    }
  }
});

app.mount('#events');
