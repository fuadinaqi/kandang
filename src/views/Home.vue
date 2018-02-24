<template>
  <div class="home">
    <BackLog/>
    <Todo/>
    <Doing/>
    <Done/>
  </div>
</template>

<script>
import BackLog from '@/components/BackLog.vue'
import Todo from '@/components/Todo.vue'
import Doing from '@/components/Doing.vue'
import Done from '@/components/Done.vue'

export default {
  name: 'home',
  components: {
    BackLog,
    Todo,
    Doing,
    Done
  },
  data () {
    return {
    }
  },
  methods: {
    getAllKanban () {
      this.$db.ref('backlog').once('value')
        .then(snapshot => {
          this.$store.commit('setBackLog', snapshot.val())
        })
        .catch(err => {
          console.log(err)
        })
      this.$db.ref('todo').once('value')
        .then(snapshot => {
          this.$store.commit('setTodo', snapshot.val())
        })
        .catch(err => {
          console.log(err)
        })
      this.$db.ref('doing').once('value')
        .then(snapshot => {
          this.$store.commit('setDoing', snapshot.val())
        })
        .catch(err => {
          console.log(err)
        })
      this.$db.ref('done').once('value')
        .then(snapshot => {
          this.$store.commit('setDone', snapshot.val())
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getAllKanban()
  }
}
</script>
