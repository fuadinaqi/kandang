<template>
  <div class="backlog">
    <div v-for="(backlog, i) in dataBacklogs" :key="i">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ backlog.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p class="button is-info is-rounded">POINT : {{ backlog.point }}</p>
            <br>
            <p class="button is-success is-rounded">ASSIGN TO : {{ backlog.assign }}</p>
          </div>
        </div>
        <footer class="card-footer">
          <a @click="deleteKanban(i)" class="card-footer-item">Delete</a>
          <a @click="nextKanban(backlog, i)" class="card-footer-item">Next</a>
        </footer>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'backlog',
  data () {
    return {
    }
  },
  methods: {
    nextKanban (backlog, key) {
      this.$db.ref('todo').child(key).set(backlog)
      this.$db.ref('backlog').child(key).set(null)
    },
    deleteKanban (key) {
      this.$db.ref('backlog').child(key).set(null)
    }
  },
  created () {
  },
  computed: {
    dataBacklogs () {
      return this.$store.getters.getBacklogs
    }
  }
}
</script>

<style scoped>
header {
  background-color: red;
}
p {
  color: white;
}
</style>
