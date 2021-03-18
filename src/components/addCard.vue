<template>
  <div class="container">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="user.name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Age</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="user.age"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">email</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputPassword1"
          v-model="user.email"
        />
      </div>
      <router-link to="/card" tag="button" class="btn btn-primary" type="button" @click="addCard">
        Add
      </router-link>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: {
        name: '',
        age: null,
        email: '',
      },
    }
  },
  methods: {
    addCard() {
      axios
        .post('http://localhost:3000/', this.user, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e))
    },
  },
}
</script>
