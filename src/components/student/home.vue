<template>
 <div>
  <search></search>
  <Table border :columns="arr" :data="data"></Table>
 </div>
</template>
<script>
  import search from '../search/search'
  export default {
    name: 'student-list',
    components: {
      search
    },
    data () {
      return {
        arr: [
          {
            type: 'index',
            title: '序 号',
            width: 100,
            fixed: 'left',
            align: 'center'
          },
          {
            title: '日 期',
            key: 'date',
            width: 200,
            align: 'center'
          },
          {
            title: '用 户 昵 称',
            key: 'nickname',
            width: 200,
            align: 'center'
          },
          {
            title: '姓 名',
            key: 'name',
            width: 200,
            align: 'center'
          },
          {
            title: '联 系 方 式',
            key: 'telephone',
            width: 200,
            align: 'center'
          },
          {
            title: '邮 箱',
            key: 'zip',
            width: 200,
            align: 'center'
          },
          {
            title: '操 作',
            key: 'operation',
            width: 200,
            align: 'center'
          }],
        data: [
          {
            date: '2017-7-15',
            nickname: 'Toney',
            name: '孙超',
            telephone: '15810392283',
            zip: '745760128@qq.com'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
 
</style>
