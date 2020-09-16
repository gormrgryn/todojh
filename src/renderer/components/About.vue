<template>
    <div class="about">
        <span class="abouttxt" @click="showabout">About</span>
        <div v-show="about">
            <p>Made by <span class="imptxt">gormargaryan</span> (https://github.com/gormargaryan)</p>
            <p>Icon by <span class="imptxt">Icons8</span> (https://icons8.com)</p>
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
}
.imptxt {
    color: #02c39a;
    font-weight: bold
}
.about > div > p {
    color: #f0f3bd
}
</style>
