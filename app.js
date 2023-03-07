const app = Vue.createApp({
  // template:'<h2>Template here</h2>'
  data() {
    return {
      url:"https://bing.com",
      title: "The Land of Wind",
      author: "Park jung ki",
      age: 23,
      showBooks: true,
      showFav: false,
      x: 0,
      y: 0,

      movies: [
        {
          title: "The Matrix",
          rating: 8.1,
          year: 1999,
          isFav:true,
          genre: ["Action", "Science Fiction"],
          coverImageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
        },
        {
          title: "The Shawshank Redemption",
          rating: 8.7,
          year: 1994,
          isFav:false,
          genre: ["Drama", "Crime"],
          coverImageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
        },
        {
          title: "The Godfather",
          rating: 8.7,
          year: 1972,
          isFav:true,
          genre: ["Drama", "Crime"],
          coverImageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
        },
        {
          title: "The Dark Knight",
          rating: 8.5,
          isFav:false,
          year: 2008,
          genre: ["Action", "Crime", "Drama", "Thriller"],
          coverImageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
        },
        {
          title: "The Lord of the Rings: The Return of the King",
          rating: 8.5,
          year: 2003,
          isFav:true,
          genre: ["Adventure", "Fantasy", "Action"],
          coverImageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
        }
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
    toggleFav(movieTitle) {
      const selectedMovie = this.movies.find(movie => movie.title === movieTitle)
      selectedMovie.isFav = !selectedMovie.isFav
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
  computed:{
    favMovies(){
      if(this.showFav){
        return this.movies.filter(movie => movie.isFav)
      }
      return this.movies
    }
  }
});

app.mount("#app");
