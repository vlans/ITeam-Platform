<template>
  <Row class="search-padding">
    <Col span="6" offset="18" class="search-input-right">
      <Input v-model="value13" class='inputbox'>
        <Button type="ghost" slot="append" icon="ios-search-strong"></Button>
      </Input>
    </Col>
  </Row>
</template>
<script>
  export default {
    name: 'search',
    data () {
      return {
        value13: '',
        model10: ''
      }
    },
    methods: {
      uploadEmit () {
        console.log(1)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .search-padding {
    padding: 20px 0;
    .search-input-right {
      margin-right: 20px;
    }
  }
</style>
