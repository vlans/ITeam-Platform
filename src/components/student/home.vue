<template>
 <Row type="flex" justify="center" align="middle" class="code-row-bg">
  <Col span="18">
    <search></search>
    <Table border :columns="arr" :data="data"></Table>
  </Col>
 </Row>
</template>
<script>
  import Search from '../search/search'
  export default {
    name: 'student-list',
    components: {
      Search
    },
    data () {
      return {
        arr: [
          {
            type: 'index',
            title: '序 号'
          },
          {
            title: '日 期',
            key: 'date'
          },
          {
            title: '用 户 昵 称',
            key: 'nickname'
          },
          {
            title: '姓 名',
            key: 'name'
          },
          {
            title: '联 系 方 式',
            key: 'telephone'
          },
          {
            title: '邮 箱',
            key: 'zip'
          },
          {
            title: '操 作',
            key: 'operation'
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
