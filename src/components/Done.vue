<template>
  <div class="done">
    <div v-for="(done, i) in dataDones" :key="i" class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ done.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          POINT : {{ done.point }}
          <br>
          ASSIGN TO : {{ done.assign }}
        </div>
      </div>
      <footer class="card-footer">
        <a @click="previewKanban(done, i)" class="card-footer-item">Perv</a>
        <a @click="deleteKanban(i)" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'done',
  data () {
    return {
    }
  },
  methods: {
    previewKanban (done, key) {
      this.$db.ref('doing').child(key).set(done)
      this.$db.ref('done').child(key).set(null)
    },
    deleteKanban (key) {
      this.$db.ref('done').child(key).set(null)
    }
  },
  created () {
  },
  computed: {
    dataDones () {
      return this.$store.getters.getDone
    }
  }
}
</script>

<style scoped>
</style>
