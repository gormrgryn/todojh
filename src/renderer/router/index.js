import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default new Router({
  routes: [
    {
      path: `/${weekday[0]}`,
      name: `${weekday[0]}`,
      component: require('@/components/WeekTodos').default
    },
    {
      path: `/${weekday[1]}`,
      name: `${weekday[1]}`,
      component: require('@/components/WeekTodos').default
    },
    {
      path: `/${weekday[2]}`,
      name: `${weekday[2]}`,
      component: require('@/components/WeekTodos').default
    },
    {
      path: `/${weekday[3]}`,
      name: `${weekday[3]}`,
      component: require('@/components/WeekTodos').default
    },
    {
      path: `/${weekday[4]}`,
      name: `${weekday[4]}`,
      component: require('@/components/WeekTodos').default
    },
    {
      path: `/${weekday[5]}`,
      name: `${weekday[5]}`,
      component: require('@/components/WeekTodos').default
    },
    {
      path: `/${weekday[6]}`,
      name: `${weekday[6]}`,
      component: require('@/components/WeekTodos').default
    }
  ]
})
