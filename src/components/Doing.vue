<template>
  <div class="doing">
    <div v-for="(doing, i) in dataDoing" :key="i">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ doing.title }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p class="button is-info is-rounded">POINT : {{ doing.point }}</p>
            <br>
            <p class="button is-success is-rounded">ASSIGN TO : {{ doing.assign }}</p>
          </div>
        </div>
        <footer class="card-footer">
          <a @click="previewKanban(doing, i)" class="card-footer-item">Prev</a>
          <a @click="deleteKanban(i)" class="card-footer-item">Delete</a>
          <a @click="nextKanban(doing, i)" class="card-footer-item">Next</a>
        </footer>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doing',
  data () {
    return {
    }
  },
  methods: {
    nextKanban (doing, key) {
      this.$db.ref('done').child(key).set(doing)
      this.$db.ref('doing').child(key).set(null)
    },
    previewKanban (doing, key) {
      this.$db.ref('todo').child(key).set(doing)
      this.$db.ref('doing').child(key).set(null)
    },
    deleteKanban (key) {
      this.$db.ref('doing').child(key).set(null)
    }
  },
  created () {
  },
  computed: {
    dataDoing () {
      return this.$store.getters.getDoing
    }
  }
}
</script>

<style scoped>
header {
  background-color: green;
}
p {
  color: white;
}
</style>
