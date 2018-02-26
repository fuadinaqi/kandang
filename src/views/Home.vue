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
        <div v-if="isCreate" class="margin-field fade-in-top">
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
          <div class="card shadow-pop-br">
            <header class="card-header" style="background-color:black">
              <p class="card-header-title" style="color:white; background-color:red">
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
          <BackLog class="shadow-pop-br"/>
        </div>
        <div class="column">
          <div class="card shadow-pop-br">
            <header class="card-header" style="background-color:black">
              <p class="card-header-title" style="color:white; background-color:orange">
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
          <Todo class="shadow-pop-br"/>
        </div>
        <div class="column">
          <div class="card shadow-pop-br">
            <header class="card-header" style="background-color:black">
              <p class="card-header-title" style="color:white; background-color:green">
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
          <Doing class="shadow-pop-br"/>
        </div>
        <div class="column">
          <div class="card shadow-pop-br">
            <header class="card-header" style="background-color:black">
              <p class="card-header-title" style="color:white; background-color:blue">
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
          <Done class="shadow-pop-br"/>
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

.shadow-pop-br {
-webkit-animation: shadow-pop-br 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: shadow-pop-br 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2018-2-26 10:52:12
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shadow-pop-br
 * ----------------------------------------
 */
@-webkit-keyframes shadow-pop-br {
  0% {
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
    -webkit-transform: translateX(-8px) translateY(-8px);
            transform: translateX(-8px) translateY(-8px);
  }
}
@keyframes shadow-pop-br {
  0% {
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    -webkit-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }
  100% {
    box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
    -webkit-transform: translateX(-8px) translateY(-8px);
            transform: translateX(-8px) translateY(-8px);
  }
}

.fade-in-top {
-webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2018-2-26 10:57:28
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in-top
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

</style>
