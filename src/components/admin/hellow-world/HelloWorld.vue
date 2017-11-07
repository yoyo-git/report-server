<template>
  <div class="hello">
    <div class="title" id="ap" v-on:click="handleCommand()">11</div>
    <div class="title" id="ap" v-on:click="handleCommand1()">12</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ' App'
    }
  },
  methods: {
    handleCommand () {
      sessionStorage.setItem('dw-token', 'wqeedwqs2132')
      var API = this.API
      API.getUserJobList({})
      .then(function (res) {
        console.log(res)
      })
    },
    handleCommand1 () {
      console.log(sessionStorage)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
