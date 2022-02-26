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
    <div class="functionButton"
         v-show="logged">
      <el-button type="primary"
                 @click="addNew">新增</el-button>
      <el-button type="primary">导入<input type="file"
               accept=".xls,.xlsx"
               class="upload-file"
               @change="Excel($event)" /></el-button>
    </div>
    <Add :showAdd="showAdd"></Add>
  </div>
</template>

<script>
import * as  XLSX from 'xlsx'
import { mapState } from "vuex";
import Add from './Add.vue'
export default {
  name: 'Search',
  components: {
    Add
  }, inject: ["reload"],
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
      inputText: '',
      showAdd: false
    }
  },
  computed: {
    ...mapState({ logged: (state) => state.logged })
  },
  methods: {
    addNew () {
      this.showAdd = !this.showAdd
    },
    Excel (e) {
      let that = this
      // 错误情况判断
      const files = e.target.files
      console.log(files)
      console.log(files.length)
      if (files.length <= 0) {
        return false;
      }
      //判断文件的后缀名是不是表格
      else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$message({
          message: "上传格式不正确，请上传xls或者xlsx格式",
          type: "warning"
        });
        return false
      } else {
        that.upload_file = files[0].name
      }
      // 读取表格
      const fileReader = new FileReader()
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: 'binary'
          })
          // 读取第一张表
          const wsname = workbook.SheetNames[0]
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])
          // 打印 ws 就可以看到读取出的表格数据
          console.log('ws', ws)
          // 定义一个新数组，存放处理后的表格数据
          that.lists = []
          ws.forEach(item => {
            that.lists.push(
              item
            )
          })
          const params = {
            'list': that.lists
          }
          this.$store.dispatch('addSomeData', params).then((response) => {
            console.log('res', response)
          })
          console.log({ list: that.lists })
          // 调用方法将lists数组发送给后端
          // that.submit_form(that.lists)
          console.log('表格')
          this.reload()
        } catch (e) {
          return false
        }
      }
      fileReader.readAsBinaryString(files[0])
    },
  }, mounted () {
    this.$bus.$on('showAdd', () => {
      this.showAdd = false
    })
  },

}
</script>

<style>
.el-select {
  width: 100px;
}
.top {
  width: 60%;
}
.functionButton {
  position: absolute;
  left: 50%;
  top: 80px;
}
.upload-file {
  font-size: 20px;
  opacity: 0;
  position: absolute;
  right: 10px;
  top: 0;
  filter: alpha(opacity=0);
  width: 30%;
}
</style>