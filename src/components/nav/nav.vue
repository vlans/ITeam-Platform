<template>
  <Menu mode="horizontal" :theme="navTheme" :active-name="$route.path" @on-select="routeGo">
      <Menu-item name="/student">
          <Icon type="ios-people"></Icon>
          学员管理
      </Menu-item>
      <Menu-item name="/open">
          <Icon type="ios-book"></Icon>
          公开课
      </Menu-item>
      <Menu-item name="/courseware">
          <Icon type="ios-videocam"></Icon>
          课件
      </Menu-item>
      <Menu-item name="/material">
          <Icon type="document-text"></Icon>
          资料
      </Menu-item>
      <Menu-item name="/tools">
          <Icon type="settings"></Icon>
          工具
      </Menu-item>
      <Menu-item name="/upload">
          <Icon type="ios-cloud-upload-outline"></Icon>
          上传
      </Menu-item>
      <Submenu name="/student-area">
          <template slot="title">
              <Icon type="chatboxes"></Icon>
              学员专区
          </template>
          <Menu-group title="功能">
              <Menu-item name="/student-wiki">wiki</Menu-item>
              <Menu-item name="/share">技术分享</Menu-item>
          </Menu-group>
      </Submenu>
      <Submenu name="7" class="user-center">
          <template slot="title">
              托尼
          </template>
          <Menu-item name="/center">个人中心</Menu-item>
          <Menu-item name="/out">登出</Menu-item>
      </Submenu>
  </Menu>
</template>
<script>
  export default {
    name: 'iteam-nav',
    data () {
      return {
        navTheme: 'dark'
      }
    },
    methods: {
      routeGo (name) {
        this.$router.push(name)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .user-center {
    float: right;
  }
</style>
