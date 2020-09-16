<template>
    <div class="tdtodos">
        <div v-for="t in todos" :key="t.todoname">
            <td-todo :todoname = t.todoname></td-todo>
        </div>
    </div>
</template>

<script>
export default {
  name: 'td-todos',
  components: {
    'td-todo': require('@/components/assist/TodayTodo').default
  },
  computed: {
    todos () {
      return this.$store.getters.getTodos.filter(i => i.tododate.month === this.$store.getters.getMonth && i.tododate.day === this.$store.getters.getWeekDay)
    }
  }
}
</script>

<style>
.tdtodos {
    margin-left: 3.5em;
    display: flex;
    flex-direction: column;
    user-select: text;
}
</style>
