<template>
    <div class="wrapper">
        <todo-input></todo-input>
        <div class="weektodos">
            <div v-for="(t, index) in todos" :key="index" class="wktd">
                <wk-todo
                    :todoname="t.todoname"
                    :todotime="t.todotime"
                    :tododesc="t.tododesc"
                ></wk-todo>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'wk-todos',
  components: {
    'wk-todo': require('@/components/assist/WeekTodo').default,
    'todo-input': require('@/components/assist/TodoInput').default
  },
  computed: {
    todos () {
      return this.$store.getters.getTodos.filter(i => i.tododate.month === this.$store.getters.getMonth && i.tododate.day === this.$route.path.substring(1))
    }
  }
}
</script>

<style>
.wktd {
    margin-top: 1em
}
.weektodos {
    max-width: 70em;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1em
}

</style>
