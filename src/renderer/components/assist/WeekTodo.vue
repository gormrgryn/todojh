<template>
    <div class="wktodo" ref="main">
        <div class="timeflex">
            <label class="checkbox-label">
                <input type="checkbox" class="checkbox" @click="check" v-model="checked">
                <span class="checkbox-custom"></span>
                <span class="wktodoname" v-text="todoname"></span>
                <span class="span"></span>
            </label>
            <div>
                <span v-text="todotime" class="timecont"></span>
                <span class="delcross" @click="removeTodo"><p>x</p></span>
            </div>
        </div>
        <p class="wktddesc" v-text="tododesc"></p>
    </div>
</template>

<script>
import db from '@/db/db'

export default {
  name: 'wk-todo',
  props: ['todoname', 'todotime', 'tododesc'],
  data () {
    return {
      checked: db.get('todos').find({todoname: this.todoname}).value().finished
    }
  },
  methods: {
    check () {
      if (this.checked) {
        this.checked = false
      } else {
        this.checked = true
      }
      this.$store.dispatch('changeStatus', {
        todoname: this.todoname,
        status: this.checked
      })
    },
    removeTodo () {
      this.$store.dispatch('removeTodo', this.todoname)
    }
  }
}
</script>

<style>
.delcross {
    font-size: 1.5em;
    border-radius: .2em;
    box-shadow: 0 0 2px #f0f3bd;
    color: #f0f3bd;
    font-weight: bold;
    text-shadow: 0px 0px 2px #02c39a;
    height: 1em;
    width: 1em;
    display: inline-block;
    text-align: center;
    user-select: none;
}
.delcross > p {
    position: relative;
    top: -.18em;
    margin: 0
}
.timecont {
    font-size: 1.5em;
    color: #02c39a;
    font-weight: bold;
    padding-right: .5em
}
.timeflex {
    display: flex;
    justify-content: space-between
}
.wktodo {
    box-shadow: 0 0 2px #f0f3bd;
    padding: 1em;
    border-radius: .25em;
    user-select: text
}
.wktodo + .wktodo {
    margin-top: 1em
}
.wktodoname {
    font-size: 1.3em;
    color: #f0f3bd;
    font-weight: bold;
    text-shadow: 0px 0px 2px #02c39a;
    position: relative;
    bottom: .15em;
    left: 1.2em
}
.wktddesc {
    font-size: 1.2em;
    color: #02c39a;
    text-shadow: 0px 0px 1px #f0f3bd;
    padding: .3em
}
.checkbox-label {
    display: block;
    position: relative;
}
.checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 1.2em;
    width: 1.2em;
}
.checkbox-custom {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.2em;
    width: 1.2em;
    background-color: #eeeeee;
    transition: .2s ease-in-out;
    border: 1px solid #00a896;
    border-radius: 3px;
}
.span {
    content: "";
    position: absolute;
    display: none;
}
.checkbox:checked ~ .span {
    display: block;
}
.checkbox:checked ~ .checkbox-custom {
    color: #f0f3bd;
    background-color: #00a896;
    border-color: #02c39a;
    box-shadow: 1px 1px 7px 0 #00a896;
}
.span {
    left: 6px;
    top: 1px;
    width: 7px;
    height: 14px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
</style>
