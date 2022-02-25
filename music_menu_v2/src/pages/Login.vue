<template>
  <div class="box">
    <el-form class="demo-ruleForm"
             ref="myAccountForm"
             :model="accountForm">
      <h1>登录</h1>
      <el-form-item prop="account"
                    :rules="[
      { required: true, message: '账号不能为空', trigger: 'blur' }
    ]"
                    class="account">

        <el-input v-model="accountForm.account"
                  autocomplete="off"
                  @focus="moveUp(0)"
                  @blur="moveDown(0)"
                  @clear="moveDown(0)"
                  @input="moveUp(0)"> </el-input>
        <label class="accountLabel"
               :class="{'focusBlur':changeIndex[0] ==true}">用户名</label>
      </el-form-item>
      <el-form-item prop="passWord"
                    :rules="[
      { required: true, message: '密码不能为空', trigger: 'blur' }
    ]"
                    class="passWord">
        <el-input type='password'
                  v-model="accountForm.passWord"
                  autocomplete="off"
                  @focus="moveUp(1)"
                  @blur="moveDown(1)"
                  @clear="moveDown(1)"
                  @input="moveUp(1)"></el-input>
        <label class="accountLabe2"
               :class="{'focusBlur':changeIndex[1] ==true}">密码</label>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   class="confirmButton"
                   @click="userLogin">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import Vue from 'vue'

export default {
  data () {
    return {
      accountForm: {
        account: '',
        passWord: ''
      },
      changeIndex: [false, false],
    }
  },
  methods: {
    moveUp (num) {
      if (num == 0) {
        Vue.set(this.changeIndex, 0, true)
      }
      else {
        Vue.set(this.changeIndex, 1, true)
      }

    }, moveDown (num) {
      if (num == 0) {
        if (this.accountForm.account == '') {
          Vue.set(this.changeIndex, 0, false)
        }
      }
      if (num == 1) {
        if (this.accountForm.passWord == '') {
          Vue.set(this.changeIndex, 1, false)
        }
      }
    },
    async userLogin () {
      try {
        const params = {
          "user_name": this.$md5(this.accountForm.account),
          "password": this.$md5(this.accountForm.passWord)
        }
        params.user_name && params.password && (await this.$store.dispatch("loginAccount", params))
        this.$router.push("/home")
      }
      catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style>
.account,
.passWord {
  width: 100%;
  position: relative;
  margin-top: 50px;
}

.accountLabel,
.accountLabe2 {
  position: absolute;
  top: 0;
  left: 0;
  color: rgb(136, 128, 128);
  padding-left: 10px;
  font-size: 16px;
  line-height: 36px;
  pointer-events: none;
  transition: all 0.2s;
}

.focusBlur {
  font-size: 12px;
  top: -20px;
  color: rgb(64, 158, 255);
  left: 10px;
}

.box {
  width: 30%;
  margin: auto;
}
</style>