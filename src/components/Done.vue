<template>
  <div class="done">
    <div v-for="(done, i) in dataDones" :key="i">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ done.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p class="button is-info is-rounded">POINT : {{ done.point }}</p>
            <br>
            <p class="button is-success is-rounded">ASSIGN TO : {{ done.assign }}</p>
          </div>
        </div>
        <footer class="card-footer">
          <a @click="previewKanban(done, i)" class="card-footer-item">Perv</a>
          <a @click="deleteKanban(i)" class="card-footer-item">Delete</a>
        </footer>
      </div>
      <br>
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
header {
  background-color: blue;
}
p {
  color: white;
}
</style>
