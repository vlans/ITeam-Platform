<template>
<Row type="flex" justify="end" class="code-row-bg">
  <Col span="4">
    <Select v-model="model10" multiple>
        <Option v-for="item in course" :value="item" :key="item">{{ item }}</Option>
    </Select>
  </Col>
  <Col span="6">
    <Input v-model="value13" >
        <Button slot="append" icon="ios-search"></Button>
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
        model10: []
      }
    },
    props: ['course']
  }
</script>
<style lang="scss">
  .code-row-bg{
    padding:10px 0;    
  }
  
</style>
