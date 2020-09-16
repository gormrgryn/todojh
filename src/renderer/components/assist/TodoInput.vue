<template>
    <div class="todoinput">
        <div class="tdi_name_cont tdi_cont">
            <div>
                <input type="text" placeholder="ToDo name" name="todoname" class="tdinput" id="tdinput_name" required autocomplete="off" v-model="todoname"/>
                <label for="tdninput" class="form__label" id="name__label">ToDo name</label>
            </div>
        </div>
        <div class="tdi_time_cont tdi_cont">
            <div>
                <input type="text" placeholder="ToDo time" name="todotime" class="tdinput" id="tdinput_time" required
                    autocomplete="off" v-model="todotime"/>
                <label for="tdninput" class="form__label" id="time__label">ToDo time</label>
            </div>
        </div>
        <div class="tdi_desc_cont tdi_cont">
            <div>
                <input type="text" placeholder="ToDo description" name="tododesc" class="tdinput" id="tdinput_desc"
                    required autocomplete="off" v-model="tododesc"/>
                <label for="tdninput" class="form__label" id="desc__label">ToDo description</label>
            </div>
        </div>
        <button class="tdi_add" @click="submit">
            Add
        </button>
    </div>
</template>

<script>
export default {
  name: 'todo-input',
  data () {
    return {
      todoname: '',
      todotime: '',
      tododesc: ''
    }
  },
  methods: {
    validate (str) {
      let isValid = false
      let regex = /^[0-9\s]*$/
      if ((parseInt(str.substring(0, 2)) <= 24) && (parseInt(str.substring(2, 6)) <= 59) && regex.test(str)) {
        isValid = true
      }
      return isValid
    },
    submit () {
      let path = this.$route.path.substring(1)
      if (
        (this.todoname && this.validate(this.todotime.toString()) && this.tododesc) &&
        (this.todotime.toString().length <= 5 && this.tododesc.toString().length <= 70 && this.todoname.toString().length <= 20)
      ) {
        this.$store.dispatch('addTodo', {
          todoname: this.todoname,
          tododesc: this.tododesc,
          todotime: this.todotime,
          tododate: {
            month: this.$store.getters.getMonth,
            day: path
          },
          finished: false
        })
        this.todoname = ''
        this.todotime = ''
        this.tododesc = ''
      } else {
        console.log(
          this.todoname.length, this.todotime.length, this.tododesc.length
        )
      }
      this.$store.dispatch('getAllTodosFromDb')
    }
  }
}
</script>

<style>
.todoinput {
    position: relative;
	padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 1em;
    padding-right: 0em;
    background-color: whitesmoke;
    max-width: 71em;
    height: 5em;
    margin: auto;
    border-radius: .25em;
    margin-top: 1em;
}
.form__label {
    position: relative
}
.tdinput {
	border: 0;
	border-bottom: 2px solid #9b9b9b;
	outline: 0;
	font-size: 1.3rem;
	color: #fff;
	padding: 7px 0;
	background: transparent;
    transition: border-color 0.2s;
    display: block;
	transition: 0.2s;
	font-size: 1rem;
    color: #9b9b9b;
    width: 100%;
    height: 3em;
    font-family: inherit
}
.tdinput::placeholder {
	color: transparent;
}


.tdinput:focus {
	padding-bottom: 6px;
	font-weight: 700;
	border-width: 3px;
	border-image: linear-gradient(to right, #028090, #2cd3af);
	border-image-slice: 1;
}



.tdi_name_cont {
    width: 35%
}
.tdi_time_cont {
    width: 20%;
    margin-left: 1em
}
.tdi_desc_cont {
    width: 45%;
    margin-left: 1em
}
.tdi_cont {
    margin-top: .5em
}

.tdinput:placeholder-shown ~ .form__label {
	font-size: 1.3rem;
	cursor: text;
    position: relative;
    bottom: 1.5em;
    transition: 0.2s
}
.tdinput:focus ~ .form__label {
    position: relative;
    bottom: 3.3em;
    display: block;
	transition: 0.2s;
	font-size: 1rem;
	color: #11998e;
	font-weight: 700;
}
.tdi_add {
    border: none;
    background-color: whitesmoke;
    color: #9b9b9b;
    font-family: inherit;
    font-weight: bold;
    width: 7%;
    border-radius: .25em;
    font-size: 1em;
    transition: .3s ease-in-out
}
.tdi_add:hover {
    color: #2cd3af;
}
</style>
