<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-main>
          <Search></Search>
          <MusicList></MusicList>
        </el-main>
        <el-aside width="20%">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import MusicList from './components/MusicList.vue'
export default {
  name: 'App',
  components: {
    Header,
    Search,
    MusicList
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 80%;
  margin: auto;
}
</style>