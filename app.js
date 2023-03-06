const app = Vue.createApp({
  // template:'<h2>Template here</h2>'
  data() {
    return {
      title: "The Land of Wind",
      author: "Park jung ki",
      age: 23,
      showBooks:true
    };
  },
  methods:{
    changeTitle(title){
      this.title = title
    },
    toggle(){
        this.showBooks = !this.showBooks
    }
  }
});

app.mount("#app");
