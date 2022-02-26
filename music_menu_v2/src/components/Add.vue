<template>
  <div class="cover"
       v-if="showAdd">
    <div class="AddForm">
      <div class="outerBox">
        <el-form ref="form"
                 :model="form"
                 label-width="80px"
                 class="demo-ruleForm">
          <div class="formItem">
            <el-form-item label="歌名"
                          prop="musicName"
                          :rules="[
      { required: true, message: '不能为空', trigger: 'blur' }
    ]">
              <el-input v-model="form.musicName"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="原唱"
                          prop='originalSinger'
                          :rules="[
      { required: true, message: '不能为空', trigger: 'blur' }
    ]">
              <el-input v-model="form.originalSinger"></el-input>
            </el-form-item>
            <el-form-item label="语言"
                          prop='language'
                          :rules="[
      { required: true, message: '不能为空', trigger: 'blur' }
    ]">
              <el-input v-model="form.language"></el-input>
            </el-form-item>
            <el-form-item label="分类"
                          prop='musicType'
                          :rules="[
      { required: true, message: '不能为空', trigger: 'blur' }
    ]">
              <el-input v-model="form.musicType"></el-input>
            </el-form-item>
            <el-form-item label="熟练度"
                          prop='proficiencyLevel'
                          :rules="[
      { required: true, message: '不能为空', trigger: 'blur' }
    ]">
              <el-input v-model="form.proficiencyLevel"></el-input>
            </el-form-item>
            <el-form-item label="指定者">
              <el-input v-model="form.designateBy"></el-input>
            </el-form-item>
          </div>

          <el-form-item class="formButton">
            <el-button type="primary"
                       @click="onSubmit">立即创建</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['showAdd'],
  inject: ["reload"],
  data () {
    return {
      form: {
        musicName: '',
        originalSinger: '',
        language: '',
        musicType: '',
        proficiencyLevel: '',
        designateBy: ''
      }
    }
  },
  methods: {
    cancel () {
      this.$refs.form.resetFields()
      this.$bus.$emit('showAdd')
      console.log('取消了增加')
    },
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (confirm('确定增加吗')) {
            this.$store.dispatch('addAData', this.form).then(
              (response) => {
                this.$bus.$emit('showAdd')
              }
            )
            this.$refs.form.resetFields()
            this.reload();
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
  }

}
</script>

<style scoped>
.AddForm {
  width: 400px;
  height: 460px;
  position: fixed;
  margin: auto;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9999;
  padding-top: 50px;
  background-color: #fff;
  border: 1px solid beige;
}
.AddForm .el-input {
  width: 250px;
}
.el-form {
  text-align: center;
  margin: 0 auto;
}
.cover {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
.el-icon-close {
  position: relative;
  left: 150px;
  bottom: 30px;
}

.formButton {
  margin-right: 80px;
}
.formItem {
  width: 200px;
}
</style>