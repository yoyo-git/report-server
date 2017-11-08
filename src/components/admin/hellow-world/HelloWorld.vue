<template>
  <div class="hello">
    <div class="title" id="ap" v-on:click="handleCommand()">11</div>
    <div class="title" v-on:click="handleCommand1()">12</div>
    <i class="icon iconfont icon-guanbi"></i>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function () {
    return { visible: false }
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
  },
  // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  beforeCreate () {
    console.log('实例初始化...')
  },
  // 实例已经创建完成之后被调用
  created () {
    console.log('实例已经创建完成...')
  },
  // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  beforeMount () {
    console.log('即将挂载...')
  },
  // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
  mounted () {
    console.log('已挂载到实例...')
  },
  // 数据更新时调用
  beforeUpdate () {
    console.log('数据更新中...')
  },
  // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
  updated () {
    console.log('数据更改导致的虚拟 DOM 重新渲染...')
  },
  // 实例销毁之前调用。在这一步，实例仍然完全可用。
  beforeDestroy () {
    console.log('实例马上销毁...')
  },
  // Vue 实例销毁后调用
  destroyed () {
    console.log('实例已销毁...')
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
