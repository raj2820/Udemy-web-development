const app = Vue.createApp({

data(){
    return{
boxASelected:false,
boxBSelected:false,
boxCSelected:false


    };
},methods:{
    boxSelected(box){
        if(box === 'A'){
            this.boxASelected = true;
            this.boxCSelected = false; 
            this.boxBSelected = false;
        }
        else if(box === 'B'){
            this.boxBSelected = true;
            this.boxASelected = false;
            this.boxCSelected = false; 
        }            
        else if(box === 'C'){
            this.boxCSelected = true;
            this.boxASelected = false; 
            this.boxBSelected = false;
        }
             
    }
}

})

app.mount('#styling')