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
        <!-- <template slot-scope="scope">
          <label v-show="!scope.row.isEdit">{{(scope.row)[item.value]}}</label>
          <el-input type="text"
                    v-show="scope.row.isEdit"
                    class="cell-input"
                    v-model="(scope.row)[item.value]"></el-input>
        </template> -->
      </el-table-column>
      <!-- <el-table-column v-if="$store.state.ifLogin"
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
      </el-table-column> -->

    </el-table>
    <el-pagination :page-sizes="[2]"
                   :page-size="2"
                   layout="prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
export default {
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
      ]
    }
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