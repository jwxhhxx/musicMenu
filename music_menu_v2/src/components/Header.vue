<template>
  <div class="header">
    <el-row>
      <el-col :span="12">
        <div class="page_title"><a class="iconfont icon-music"></a>
          My Music
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right_part">
          <el-button size="small"
                     @click='toLogin'
                     v-if="!logged">登录</el-button>
          <div v-else>

            <label for="">{{userInfo.nickname}}</label>
            <el-avatar :src="userInfo.avatar"
                       size="medium"></el-avatar>
            <el-button size="small"
                       @click='outLogin'>登出</el-button>
          </div>

        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'Header',
  computed: {
    ...mapState({ userInfo: (state) => state.userinfo, logged: (state) => state.logged })
  },
  methods: {
    toLogin () {
      if (this.$route.path == "/home") {
        this.$router.push("/login");
      }
    },
    async outLogin () {
      try {
        await this.$store.dispatch('getOutLogin')
        alert('退出登录')
        this.$router.push('/home')
      } catch (error) {

      }
    }

  },
  beforeMount () {
    this.$store.dispatch('getNowUser')
  },
}
</script>

<style>
.header {
  height: 50px;
  line-height: 50px;
}
.page_title {
  color: black;
  font-weight: bold;
}
.page_title a {
  border-radius: 50%;
  border: black 1px solid;
  font-size: 20px;
  margin-left: 5px;
}
.right_part {
  float: right;
}
</style>