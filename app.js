const app = Vue.createApp({
  // template:'<h2>Template here</h2>'
  data() {
    return {
      title: "The Land of Wind",
      author: "Park jung ki",
      age: 23,
      showBooks:true,
      x:0,
      y:0
    };
  },
  methods:{
    changeTitle(title){
      this.title = title
    },
    toggle(){
        this.showBooks = !this.showBooks
    },

    handleEvent(e,data){
      console.log('Event type: ',e.type);
      if (data) {
        console.log('Data: ',data);
      }
    },
    handleMousemove(e){
      this.x = e.offsetX;
      this.y = e.offsetY;

    }
  }
});

app.mount("#app");
