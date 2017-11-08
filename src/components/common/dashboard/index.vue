<template>
  <div class="dashboard">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content" style="margin-left: 250px;">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import vHead from '../header/index.vue'
  import vSidebar from '../sidebar/index.vue'

  export default {
    components: {
      vHead, vSidebar
    }
  }
</script>

<style lang="scss" scoped>
  @import "./style.scss";
</style>
