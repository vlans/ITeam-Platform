<template>
  <Row type="flex" justify="center" align="middle">
    <Col span="18">
      <Table :border="false" :columns="hMeterial" :data="bMeterial"></Table>
    </Col>
  </Row>
</template>
<script>
  export default {
    name: 'material',
    data () {
      return {
        hMeterial: [
          {
            title: '日期',
            key: 'date',
            sortable: true
          },
          {
            title: '资料名称',
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
    }
  }
</script>
<style lang="scss" scoped>
  
</style>
