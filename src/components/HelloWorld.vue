<template >
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>Buttons</h2>
    <div>
      <el-button @click="onAdd">添加</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name:'HelloWorld',
  data(){
    return{
      msg:'111'
    }
  },
  methods:{
    onAdd(){
      this.$message('嘻嘻')
    }
  }
}
</script>
