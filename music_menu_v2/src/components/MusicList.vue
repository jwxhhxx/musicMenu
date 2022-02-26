<template>
  <div class="musicList">
    <el-table :data="tableData"
              border
              style="margin-top:50px"
              :header-cell-style="{background:'#f5f7fa',color:'#606266'}">
      <el-table-column v-for="item  in tableTitle"
                       :label="item.label"
                       :width="item.width"
                       :key="item.id"
                       :prop="item.value"
                       fixed
                       highlight-current-row>
        <template slot-scope="scope">
          <label v-show="!scope.row.isEdit">{{(scope.row)[item.value]}}</label>
          <el-input type="text"
                    v-show="scope.row.isEdit"
                    class="cell-input"
                    v-model="(scope.row)[item.value]"></el-input>
        </template>
      </el-table-column>
      <el-table-column v-if="logged"
                       fixed="right"
                       label="操作">
        <template slot-scope="scope">
          <el-button type="primary"
                     :icon="scope.row.isEdit?'el-icon-check':'el-icon-edit'"
                     circle
                     @click="editItem(scope.row)"></el-button>
          <el-button type="danger"
                     icon="el-icon-delete"
                     circle
                     @click="deleteItem(scope.row.id)"></el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-pagination @current-change="handleCurrentChange"
                   :page-size="pagesize"
                   :current-page="currentPage"
                   :total='total'
                   layout="prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  inject: ["reload"],
  data () {
    return {
      tableTitle: [
        {
          value: 'musicName',
          label: '歌曲名',
          // width: 180
        }, {
          value: 'originalSinger',
          label: '歌手',
          // width: 180
        }, {
          value: 'musicType',
          label: '曲风',
          // width: 180
        }, {
          value: 'language',
          label: '语言',
          // width: 180
        }
      ],
      pagesize: 5,
      currentPage: 1
    }
  },

  methods: {
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
      this.renovate()
    },
    editItem (item) {
      if (item.isEdit == true) {
        if (confirm('确定修改吗')) {
          item.isEdit = false
          // delete item.isEdit
          this.$store.dispatch('UpdateList', item)

        }

      } else {
        if (Object.prototype.hasOwnProperty.call(item, 'isEidt')) {
          item.isEdit = true
          console.log(item.isEdit)
        } else {
          this.$set(item, 'isEdit', true)
        }
      }
      console.log(item.isEdit)
    },
    deleteItem (id) {
      console.log(id)
      const params = {
        "id": id
      }
      if (confirm('确定删除吗')) {
        this.$store.dispatch('deleteList', params)
        this.reload();
      }
    },
    //刷新
    renovate () {
      const params = {
        "pageSize": this.pagesize,
        "pageNo": this.currentPage
      }
      this.$store.dispatch('getMusicList', params)
    }
  }
  ,
  computed: {
    ...mapState({ tableData: (state) => state.tableData, total: (state) => state.total, logged: (state) => state.logged })
  },
  created () {
    this.renovate()
  },
}
</script>

<style>
.musicList {
  width: 80%;
  text-align: center;
}
.el-table-column {
  background-color: cornflowerblue;
}
</style>