<template>
  <div>
    <el-table :data="randomData"
              border
              style="width: 100%">
      <el-table-column prop="musicName"
                       label="随机歌单">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({ randomData: (state) => state.randomData })
  },
  created () {
    this.$store.dispatch('getRandomList')
  },
}
</script>

<style>
.el-table-column {
  background-color: cornflowerblue;
}
</style>