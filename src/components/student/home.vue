<template>
  <Table :columns="arr" :data="data"></Table>
</template>
<script>
  export default {
    name: 'student-list',
    data () {
      return {
        arr: [{
          title: 1,
          key: 'name'
        }],
        data: [{
          name: 1
        }]
      }
    }
  }
</script>
<style lang="scss">
  
</style>
