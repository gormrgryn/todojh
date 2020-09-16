<template>
    <div class="tdtodo">
        <label class="checkbox-label">
            <input type="checkbox" class="checkbox" v-model="checked" @click="check">
            <span class="checkbox-custom"></span>
            <span class="tdtodoname" v-text="todoname"></span>
            <span class="span"></span>
        </label>
    </div>
</template>

<script>
import db from '@/db/db'

export default {
  name: 'td-todo',
  props: ['todoname'],
  data () {
    return {
      checked: false
    }
  },
  mounted () {
    this.checked = db.get('todos').find({todoname: this.todoname}).value().finished
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
      console.log(this.checked)
    }
  }
}
</script>

<style>
.tdtodo {
    box-shadow: 0 0 4px #f0f3bd;
    width: 25em;
    padding: .85em;
    border-radius: .25em;
    height: 3em;
    margin-top: 1em
}
.tdtodoname {
    font-size: 1.3em;
    color: #00a896;
    font-weight: bold;
    text-shadow: 0px 0px 2px #05668d;
    position: relative;
    left: 1.5em;
    bottom: .15em
}
.tdtodo + .tdtodo {
    margin-top: 1em
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
