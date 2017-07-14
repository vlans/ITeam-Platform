<template>
  <Menu mode="horizontal" :theme="navTheme" active-name="1">
      <Menu-item name="1">
          <Icon type="ios-people"></Icon>
          学员管理
      </Menu-item>
      <Menu-item name="2">
          <Icon type="ios-book"></Icon>
          公开课
      </Menu-item>
      <Menu-item name="3">
          <Icon type="ios-videocam"></Icon>
          课件
      </Menu-item>
      <Menu-item name="4">
          <Icon type="document-text"></Icon>
          资料
      </Menu-item>
      <Menu-item name="5">
          <Icon type="settings"></Icon>
          工具
      </Menu-item>
      <Submenu name="6">
          <template slot="title">
              <Icon type="chatboxes"></Icon>
              学员专区
          </template>
          <Menu-group title="功能">
              <Menu-item name="6-1">wiki</Menu-item>
              <Menu-item name="6-2">技术分享</Menu-item>
          </Menu-group>
      </Submenu>
      <Submenu name="7" class="user-center">
          <template slot="title">
              托尼
          </template>
          <Menu-item name="7-1">个人中心</Menu-item>
          <Menu-item name="7-2">登出</Menu-item>
      </Submenu>
  </Menu>
</template>
<script>
  export default {
    name: 'nav',
    data () {
      return {
        navTheme: 'light'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .user-center {
    float: right;
  }
</style>
