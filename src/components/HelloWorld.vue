<script setup>
import {defineComponent, getCurrentInstance, ref} from 'vue'
import {ElRow,ElCol,ElTable,ElTableColumn} from 'element-plus'
const {proxy} = getCurrentInstance();
const s = ref(1)
defineComponent(ElRow,ElCol,ElTable,ElTableColumn)
function change() {
  s.value = s.value ^ 1;
  proxy.$i18n.locale = ['en', 'zh'][s.value ^ 1];
}
const tableData = [
  {
    createdTime: '2016-05-03 10:20:15',
    orderNumber: '123',
  }]

</script>

<template>

  <el-row justify="center">
    <el-col :offset="3" :span="18">
      <h1><input type="button" value="切换" @click="change()"></h1>
    </el-col>
  </el-row >

  <el-row justify="center">
    <el-col :offset="3" :span="18">
      <h1>{{ $t(`title.main`) }}</h1>
    </el-col>
  </el-row >


  <el-row justify="center">
    <el-col :offset="3" :span="18">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="orderNumber" :label="$t(`column.orderNo`)"/>
        <el-table-column prop="createdTime" :label="$t(`column.createdTime`)"  />
      </el-table>
    </el-col>
  </el-row>


</template>

<style scoped>

</style>
