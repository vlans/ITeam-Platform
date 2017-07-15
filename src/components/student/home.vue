<template>
  <Table :columns="columns1" :data="data1"></Table>
</template>
<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: '姓名',
            key: 'name'
          }
        ],
        data1: [
          {
            name: '小明'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  
</style>
