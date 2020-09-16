<template>
    <div class="navwrapper">
        <nav class="nav">
            <ul class="navlist">
                <li class="li" @click="shasnap"><router-link to='/Monday'>Monday</router-link></li>
                <li class="li" @click="shasnap"><router-link to='/Tuesday'>Tuesday</router-link></li>
                <li class="li" @click="shasnap"><router-link to='/Wednesday'>Wednesday</router-link></li>
                <li class="li" @click="shasnap"><router-link to='/Thursday'>Thursday</router-link></li>
                <li class="li" @click="shasnap"><router-link to='/Friday'>Friday</router-link></li>
                <li class="li" @click="shasnap"><router-link to='/Saturday'>Saturday</router-link></li>
                <li class="li" @click="shasnap"><router-link to='/Sunday'>Sunday</router-link></li>
                <div class="shadow" ref="ind"></div>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'nav-wd',
  methods: {
    shasnap (e) {
      const shadow = this.$refs.ind
      const lis = [...document.querySelectorAll('.li')]
      shadow.classList = ''
      shadow.classList.add('shadow')
      let shclass = ''
      if (e.target.tagName === 'LI') {
        shclass = lis.indexOf(e.target)
      } else {
        shclass = lis.indexOf(e.target.parentNode)
      }
      shadow.classList.add(`day${shclass}`)
    }
  },
  mounted () {
    const ind = this.$refs.ind
    const lis = [...document.querySelectorAll('.li')]
    lis.forEach((li, index) => {
      if (li.childNodes[0].innerText === this.$store.getters.getWeekDay) {
        ind.classList = ''
        ind.classList.add('shadow')
        ind.classList.add('day' + index)
      }
    })
  }
}
</script>

<style>
.shadow {
    height: 2px;
    background: #f0f3bd;
    box-shadow: 0px 1px 8px 0.0625em #2cd3af;
    border-radius: .25em;
    transition: .3s ease-in-out;
    width: 14.28%;
    position: relative;
    top: 1.3em
}
.focused {
    margin-left: 14.28%
}
nav {
    position: relative;
    height: 1.3em;
}
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: inherit;
}
nav ul li {
    font-size: 1.1em;
    width: 5.5em;
    text-align: center;
    color: #03bba8;
    font-weight: bold;
    text-shadow: 0px 0px 2px #05668d;
    float: left;
    width: 14.28%;
    transition: .3s ease-in-out
}
nav ul li a {
    text-decoration: none;
    color: #03bba8;
    cursor: default
}
nav ul li:hover {
    text-shadow: 0px 0px 1px #f0f3bd;
}

nav ul li:nth-child(1):hover ~ .shadow {
    width: 14.28%;
    margin-left: 0
}
nav ul li:nth-child(2):hover ~ .shadow {
    width: 14.28%;
    margin-left: 14.28%
}
nav ul li:nth-child(3):hover ~ .shadow {
    width: 14.28%;
    margin-left: calc(14.28% * 2)
}
nav ul li:nth-child(4):hover ~ .shadow {
    width: 14.28%;
    margin-left: calc(14.28% * 3)
}
nav ul li:nth-child(5):hover ~ .shadow {
    width: 14.28%;
    margin-left: calc(14.28% * 4)
}
nav ul li:nth-child(6):hover ~ .shadow {
    width: 14.28%;
    margin-left: calc(14.28% * 5)
}
nav ul li:nth-child(7):hover ~ .shadow {
    width: 14.28%;
    margin-left: calc(14.28% * 6)
}

.day0 {
    margin-left: calc(0 * 14.28%)
}
.day1 {
    margin-left: calc(1 * 14.28%)
}
.day2 {
    margin-left: calc(2 * 14.28%)
}
.day3 {
    margin-left: calc(3 * 14.28%)
}
.day4 {
    margin-left: calc(4 * 14.28%)
}
.day5 {
    margin-left: calc(5 * 14.28%)
}
.day6 {
    margin-left: calc(6 * 14.28%)
}
</style>
