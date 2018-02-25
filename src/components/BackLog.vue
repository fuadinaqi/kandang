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
            POINT : {{ backlog.point }}
            <br>
            ASSIGN TO : {{ backlog.assign }}
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
</style>
