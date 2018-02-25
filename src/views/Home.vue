<template>
  <div class="home">
    <div class="container is-fluid">
      <section class="hero is-black">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Kandang
            </h1>
            <h2 class="subtitle">
              Kanban is my sandang
            </h2>
          </div>
        </div>
      </section>
      <br>
      <div class="container">
        <button v-if="!isCreate" @click="setIsCreate" class="button is-primary is-rounded">Create Task</button>
        <br><br>
        <div v-if="isCreate" class="margin-field">
          <div class="field">
            <div class="control">
              <input v-model="kanbanCreate.title" class="input" type="text" placeholder="Title">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="kanbanCreate.point" class="input" type="number" min="0" max="100" placeholder="Point">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input v-model="kanbanCreate.assign" class="input" type="text" placeholder="Assign to">
            </div>
          </div>
          <br>
          <button @click="createKanban" class="button is-primary is-rounded">Create</button>
        </div>
      </div>
      <br>
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header" style="background-color:black">
              <p class="card-header-title" style="color:white; background-color:teal">
                Backlog
              </p>
              <a class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
          </div>
          <br>
          <BackLog/>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header" style="background-color:black">
              <p class="card-header-title" style="color:white; background-color:teal">
                Todo
              </p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
          </div>
          <br>
          <Todo/>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header" style="background-color:black">
              <p class="card-header-title" style="color:white; background-color:teal">
                Doing
              </p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
          </div>
          <br>
          <Doing/>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header" style="background-color:black">
              <p class="card-header-title" style="color:white; background-color:teal">
                Done
              </p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </a>
            </header>
          </div>
          <br>
          <Done/>
        </div>
      </div>
    </div>
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
      isCreate: false,
      kanbanCreate: {
        title: '',
        point: '',
        assign: ''
      }
    }
  },
  methods: {
    getAllKanban () {
      let self = this
      this.$db.ref('backlog').on('value', snapshot => {
        self.$store.commit('setBackLog', snapshot.val())
      })
      this.$db.ref('todo').on('value', snapshot => {
        self.$store.commit('setTodo', snapshot.val())
      })
      this.$db.ref('doing').on('value', snapshot => {
        self.$store.commit('setDoing', snapshot.val())
      })
      this.$db.ref('done').on('value', snapshot => {
        self.$store.commit('setDone', snapshot.val())
      })
    },
    createKanban () {
      this.$db.ref('backlog').push(this.kanbanCreate)
      this.kanbanCreate = {
        title: '',
        point: '',
        assign: ''
      }
      this.isCreate = false
    },
    setIsCreate () {
      this.isCreate = true
    }
  },
  created () {
    this.getAllKanban()
  }
}
</script>

<style scoped>
.margin-field {
  margin-left: 30%;
  margin-right: 30%;
}
</style>
