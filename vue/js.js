const app = new Vue({
  el: '#app',
  data: {
    results: [],
    message: 'Thor'
  },
  methods:{
    fetchFilm: function () {
      this.$http.get("http://www.omdbapi.com/?apikey=d5677312&s="+this.message)
        .then(function (response) {
          console.log(response)
          if(response.body.Response === "False"){
            console.log("Error") 
            alert("Error\r"+response.body.Error) 
          }
          this.results = response.data.Search;
          console.log(this.results)
          console.log("Done!!!")
        }) 
        .catch(function (e) {
          console.log("Caught", e);
      })
    } 
  }, 
});