new Vue({
  el: "#vue-app",
  data: {
    name: "dani",
    users: []
  },
  methods: {
    switchLike(id, stat) {
      localStorage.setItem(id, stat)
      index = this.users.findIndex(x => x.id === id)
      this.users[index].isLiked = stat
      console.log(index, stat, this.users[index])
    }
  },
  beforeMount() {
    console.log('Before mount')
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.users = response.data
        if (typeof(Storage) !== "undefined") {
          for (let x in this.users) {
            if (localStorage.getItem(this.users[x].id) === null) {
              localStorage.setItem(this.users[x].id, 0)
              Vue.set(this.users[x], 'isLiked', 0)
            } else {
              Vue.set(this.users[x], 'isLiked', parseInt(localStorage.getItem(this.users[x].id)))
              this.users[x].isLiked = parseInt(localStorage.getItem(this.users[x].id))
            }
          }
        } else {
          console.log("localStorage not supported!")
        }
        console.log(this.users)
      })
      .catch(function (error) {
        throw error
      })
  }
})
