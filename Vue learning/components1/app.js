const app = Vue.createApp({
    data(){
        
return{
    
    friends:[
        {
            id:'raj',
            name:'raj shinde',
            phone:'34567890',
            email:'raj@ymail.com'
        },
        {
            id:'yo',
            name:'yo yo yo',
            phone:'34567890',
            email:'yoyoyo@ymail.com'
        },
    ]
}
    },methods:{
toggleDetails(){
    this.detailsAreVisible = !this.detailsAreVisible
}
    },
})
app.component('friend-contact',{
    data(){
        return{

        }
    }
})
app.mount('#app')