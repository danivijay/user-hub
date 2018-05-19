new Vue({
  el: "#vue-app",
  data: {
    name: "dani",
    thumbnail: '',
    users: []
  },
  beforeMount() {
    console.log('Before mount')
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.users = response.data
        console.log("users: ", this.users[0])
      })
      .catch(function (error) {
        throw error
      })
  }
})
