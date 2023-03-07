const app = Vue.createApp({
  // template:'<h2>Template here</h2>'
  data() {
    return {
      title: "The Land of Wind",
      author: "Park jung ki",
      age: 23,
      showBooks: true,
      x: 0,
      y: 0,
      movies: [
        {
          title: "The Matrix",
          year: 1999,
          genre: "Sci-Fi",
          rating: 8.7,
        },
        {
          title: "The Lion King",
          year: 1994,
          genre: "Animation",
          rating: 8.5,
        },
        {
          title: "The Godfather",
          year: 1972,
          genre: "Crime",
          rating: 9.2,
        },
        {
          title: "The Shawshank Redemption",
          year: 1994,
          genre: "Drama",
          rating: 9.3,
        },
        {
          title: "The Avengers",
          year: 2012,
          genre: "Action",
          rating: 8.0,
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggle() {
      this.showBooks = !this.showBooks;
    },

    handleEvent(e, data) {
      console.log("Event type: ", e.type);
      if (data) {
        console.log("Data: ", data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
