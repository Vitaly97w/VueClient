<template>
  <div>
    <div class="container mt-3 row row-cols-1 g-2" v-if="!isEmpty">
      <div
        class="card text-black ms-3 col"
        style="max-width: 18rem;"
        v-for="(val, index) in data.data"
        :key="index"
      >
        <div class="mb-3" v-show="val.__v">
          <label class="form-label">Name</label>
          <input type="email" class="form-control" v-model="val.name" />
        </div>
        <div class="mb-3" v-show="val.__v">
          <label class="form-label">Age</label>
          <input type="text" class="form-control" v-model="val.age" />
        </div>
        <div class="mb-3" v-show="val.__v">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" v-model="val.email" />
        </div>
        <div class="card-header" v-show="!val.__v">
          Name: <span style="color: Red" v-show="!val.__v">{{ val.name }}</span>
        </div>
        <div class="card-body">
          <p class="card-title" v-show="!val.__v">Age: {{ val.age }}</p>
          <p v-show="!val.__v">Email: {{ val.email }}</p>
          <button
            class="btn btn-success me-3"
            @click="editCard($event, index)"
            v-show="!val.__v"
          >
            Редактировать
          </button>
          <button
            class="btn btn-success"
            @click="putCard($event, index)"
            v-show="val.__v"
          >
            OK
          </button>
          <button
            class="btn btn-danger"
            v-show="!val.__v"
            @click="deleteCard($event, val, index)"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>

    <div class="spinner-border" role="status" v-else>
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: {},
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000')
      .then((res) => (this.data = res))
      .catch((err) => console.log(err))
  },
  computed: {
    isEmpty() {
      return Object.keys(this.data).length == 0
    },
  },
  methods: {
    deleteCard(e, data, i) {
      axios.delete(`http://localhost:3000/` + data['_id'])
      this.data.data.splice(i, 1)
    },
    editCard(event, index) {
      this.data.data[index]['__v'] = !this.data.data[index]['__v']
    },
    putCard(event, index) {
      this.data.data[index]['__v'] = !this.data.data[index]['__v']
      axios
        .put('http://localhost:3000/', this.data.data[index], {
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
