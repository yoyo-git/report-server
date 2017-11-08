<template>
  <div class="login">
    <h2>配置管理系统登录</h2>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRule" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <div class="login-btn">
        <el-button type="primary" :loading="loading" @click="submitForm('loginForm')">登录</el-button>
      </div>
      <p class="tips">Tips : 用户名密码不可空</p>
    </el-form>
  </div>
</template>

<script>
  /* eslint-disable arrow-parens */

  import { mapGetters } from 'vuex';

  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRule: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        loading: false
      }
    },
    computed: {
      ...mapGetters([
        'auth_type'
      ])
    },
    methods: {
      submitForm(formName) {
        const self = this;
        self.$refs[formName].validate(valid => {
          if (valid) {
            self.loading = true;
            self.$store.dispatch('LoginByName', self.loginForm).then((data) => {
              console.log(data);
              self.loading = false;
              self.$router.push('/home');
            }).catch(err => {
              console.log(err);
              return false
            })
          } else {
            console.log('error submit!!');
            return false
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    position: absolute;
    width: 500px;
    height: 250px;
    top: 150px;
    right: 100px;
  }
  .tips {
    font-size:12px;
    line-height:30px;
    color:#999;
  }
</style>
