<template>
  <Table :columns="thead" :data="tbody"></Table>
</template>
<script>
  export default {
    name: 'student-list',
    data () {
      return {
        thead: [
          {title: '姓名', key: 'name'}
        ],
        tbody: [
          {name: '小明'}
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
