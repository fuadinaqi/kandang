<template>
  <div class="todo">
    <div v-for="(todo, i) in dataTodos" :key="i">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ todo.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p class="button is-info is-rounded">POINT : {{ todo.point }}</p>
            <br>
            <p class="button is-success is-rounded">ASSIGN TO : {{ todo.assign }}</p>
          </div>
        </div>
        <footer class="card-footer">
          <a @click="previewKanban(todo, i)" class="card-footer-item">Prev</a>
          <a @click="deleteKanban(i)" class="card-footer-item">Delete</a>
          <a @click="nextKanban(todo, i)" class="card-footer-item">Next</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
    }
  },
  methods: {
    nextKanban (todo, key) {
      this.$db.ref('doing').child(key).set(todo)
      this.$db.ref('todo').child(key).set(null)
    },
    previewKanban (todo, key) {
      this.$db.ref('backlog').child(key).set(todo)
      this.$db.ref('todo').child(key).set(null)
    },
    deleteKanban (key) {
      this.$db.ref('todo').child(key).set(null)
    }
  },
  created () {
  },
  computed: {
    dataTodos () {
      return this.$store.getters.getTodos
    }
  }
}
</script>

<style scoped>
header {
  background-color: orange;
}
p {
  color: white;
}
</style>
