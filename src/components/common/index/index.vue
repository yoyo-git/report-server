<style>
  @import "reset.css"
</style>
<style>
  @import "supersized.css"
</style>
<style>
  @import "style.css"
</style>
<template>
  <div>
    <div class="page-container">
              <h1>Login</h1>
              <form action="" method="post">
          <div>
            <input type="text" name="username" class="username" placeholder="Username" autocomplete="off"/>
          </div>
                  <div>
            <input type="password" name="password" class="password" placeholder="Password" oncontextmenu="return false" onpaste="return false" />
                  </div>
                  <button v-on:click="login()" type="button">Sign in</button>
              </form>
              <div class="connect">
                  <p>If we can only encounter each other rather than stay with each other,then I wish we had never encountered.</p>
          <p style="margin-top:20px;">如果只是遇见，不能停留，不如不遇见。</p>
              </div>
          </div>
      <div class="alert" style="display:none">
        <h2>消息</h2>
        <div class="alert_con">
          <p id="ts"></p>
          <p style="line-height:70px"><a class="btn">确定</a></p>
        </div>
      </div>
      <ul class="speed">
        <li class="slide slide-0">
          <a target="_blank">
            <img src="../../../assets/1.jpg"/>
          </a>
        </li>
        <li class="slide slide-1">
          <a target="_blank">
            <img src="../../../assets/2.jpg"/>
          </a>
        </li>
        <li class="slide slide-2">
          <a target="_blank">
            <img src="../../../assets/3.jpg"/>
          </a>
        </li>
      </ul>
  </div>
    
</template>
<script>
import script from './script.js'
export default script
</script>
