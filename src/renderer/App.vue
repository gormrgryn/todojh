<template>
  <div id="app">
    <date></date>
    <nav-wd></nav-wd>
    <router-view></router-view>
    <about></about>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    'date': require('@/components/assist/Date.vue').default,
    // 'td-todos': require('@/components/TodayTodos.vue').default,
    'nav-wd': require('@/components/Nav.vue').default,
    'about': require('@/components/About.vue').default
  },
  mounted () {
    if (this.$route.path.substring(1) !== this.$store.getters.getWeekDay) {
      this.$router.push(`/${this.$store.getters.getWeekDay}`)
    }
    this.$store.dispatch('getAllTodosFromDb')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
body {
  margin: 0;
  background-color: #05668d;
}
:root {
  box-sizing: border-box;
}
*,
*::before,
*::after{
  box-sizing: inherit
}
#app {
  font-family: 'Raleway', sans-serif;
  user-select: none;
  
  padding: 1.5em; 
}
#app > * + * {
  margin-top: 1.5em
}
</style>
