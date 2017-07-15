<template>
  <Row type="flex" justify="center" align="middle">
    <Col span="18">
      <search></search>
      <Table :columns="hMeterial" :data="bMeterial"></Table>
    </Col>
  </Row>
</template>
<script>
  import Search from '../search/search'
  export default {
    name: 'material',
    data () {
      return {
        hMeterial: [
          {
            title: '日期',
            key: 'date',
            sortable: true,
            width: 200
          },
          {
            title: '资料名称',
            key: 'cname'
          },
          {
            title: '适用人群',
            key: 'Adapt',
            width: 220
          },
          {
            title: '技术类型',
            key: 'technology',
            width: 200
          },
          {
            title: '作者',
            key: 'teacher',
            width: 120
          },
          {
            title: '操作',
            width: 180,
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
