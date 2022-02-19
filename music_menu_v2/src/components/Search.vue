<template>
  <div class="top">
    <el-input placeholder="请输入内容"
              class="input-with-select"
              v-model="inputText">
      <el-select v-model="value"
                 slot="prepend"
                 placeholder="请选择">
        <el-option v-for="item in options"
                   :key="item.value"
                   :value='item.value'
                   :label="item.label"></el-option>
      </el-select>
      <el-button slot="append"
                 icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      options: [
        {
          value: 'musicName',
          label: '歌名'
        },
        {
          value: 'originalSinger',
          label: '歌手'
        },
        {
          value: 'musicType',
          label: '曲风'
        },
        {
          value: 'language',
          label: '语言'
        }
      ],
      value: 'musicName',
      inputText: ''
    }
  }
}
</script>

<style>
.el-select {
  width: 100px;
}
.top {
  width: 60%;
}
</style>