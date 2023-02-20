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

    },
})
app.component('friend-contact',{
    template:`
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li ><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    `,
    data(){
        return{
            detailsAreVisible:false,
            friend:{
                id:'raj',
                name:'raj shinde',
                phone:'34567890',
                email:'raj@ymail.com'
            },
        }
    },methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
            },
})
app.mount('#app')