<template>
  <Row type="flex" justify="center" align="middle">
    <Col span="18">
      <search></search>
      <Table :border="false" :columns="hMeterial" :data="bMeterial"></Table>
    </Col>
  </Row>
</template>
<script>
  import Search from '../search/search'
  export default {
    name: 'tools',
    data () {
      return {
        hMeterial: [
          {
            title: '日期',
            key: 'date',
            sortable: true
          },
          {
            title: '工具名称',
            key: 'cname'
          },
          {
            title: '作者',
            key: 'teacher'
          },
          {
            title: '操作',
            key: 'action',
            render: (h, p) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  },
                  on: {
                    click () {
                      console.log(p)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                }, '下载')
              ])
            }
          }
        ],
        bMeterial: [
          {
            date: '2017-12-12',
            cname: '入门布局以及实现Css3动画',
            teacher: '托尼'
          }
        ]
      }
    },
    components: {
      Search
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
