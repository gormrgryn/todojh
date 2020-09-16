<template>
    <div class="head">
        <div class="header">
            <span class="weekday">{{dayname}}</span>
            <span class="monthnum">{{daynum}}</span>
            <span class="month">{{monthname}}</span>
        </div>
        <div id="sidecontainer">
            <div class="tdnumside">
                <p class="left">Left ToDos</p>
                <p class="num">{{tdleft}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'date',
  computed: {
    daynum () {
      return this.$store.getters.getDay
    },
    dayname () {
      return this.$store.getters.getWeekDay
    },
    monthname () {
      return this.$store.getters.getMonth
    },
    tdleft () {
      return this.$store.state.todos.filter(
        i => i.tododate.month === this.$store.getters.getMonth && i.tododate.day === this.$store.getters.getWeekDay && !i.finished
      ).length
    }
  }
}
</script>

<style>
:root {
  box-sizing: border-box;
}
*,
*::before,
*::after{
  box-sizing: inherit
}
.head {
    height: 8em;
    margin-bottom: 2em
}
.weekday {
    font-size: 4.5em;
    color: #f0f3bd
}
.monthnum {
    font-size: 3em;
    color:  #02c39a
}
.month {
    font-size: 3em;
    color: #00a896
}
.header {
    text-shadow: 0px 0px 3px #02c39a;
    float: left;
    width: 85%
}
.num, .left {
    display: block;
    text-align: center;
}
.num {
    font-size: 4.5em;
    text-align: center;
    color: #f0f3bd;
    text-shadow: 5px 0px 10px #03bba8;
    margin: 0;
}
.left {
    font-size: 1.3em;
    color: #f0f3bd;
    margin: 0;
    padding-top: .3em
}
#sidecontainer {
    float: left;
    width: 15%;
}
.tdnumside {
    width: 7.7em;
    height: 7.5em;
    box-shadow: 0 0 .625em #f0f3bd;
    border-radius: .25em;
}
</style>
