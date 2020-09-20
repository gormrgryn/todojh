<template>
    <div class="about">
        <span class="abouttxt" @click="showabout">About</span>
        <div v-show="about">
            <p>Made by <span class="imptxt">gormrgryn</span> (<span class="link">https://github.com/gormrgryn</span>)</p>
            <p>Icons made by <span class="imptxt">Freepik</span> (<span class="link">https://www.flaticon.com/authors/freepik</span>) from <span class="link imptxt">https://www.flaticon.com</span></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      about: false
    }
  },
  methods: {
    showabout () {
      if (this.about) {
        this.about = false
      } else {
        this.about = true
      }
    }
  }
}
</script>

<style>
.abouttxt {
  text-decoration: #00a896 underline;
  color: #00a896;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
}
.link {
  user-select: all
}
.imptxt {
  color: #02c39a;
  font-weight: bold
}
.about > div > p {
  color: #f0f3bd
}
</style>
