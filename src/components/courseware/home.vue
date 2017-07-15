<template>
  <Row type="flex" justify="center" align="middle">
    <Col span="18">
      <Table :border="false" :columns="hCourse" :data="bCourse"></Table>
    </Col>
  </Row>
</template>
<script>
  export default {
    name: 'courseware',
    data () {
      return {
        hCourse: [
          {
            title: '日期',
            key: 'date',
            sortable: true
          },
          {
            title: '课件名称',
            key: 'cname'
          },
          {
            title: '主讲老师',
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
        bCourse: [
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
