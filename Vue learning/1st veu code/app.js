const { createApp } = Vue
createApp({
    data() {
        return{
            courseA:'Finish the course and learn vue',
            courseB:"Mater vuewwwww",
            vueLink:"https://www.udemy.com/course/vuejs-2-the-complete-guide/"
        };
    },
    methods:{
outputGoal(){
    const randomNumber=Math.random();
    if(randomNumber < 0.5){
        return this.courseA
    }else{
        return this.courseB
    }
}
    }
}).mount('#user-goal');
