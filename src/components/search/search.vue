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
<<<<<<< HEAD
        model10: ''
=======
        model10: []
>>>>>>> a3a7fb7c96db13aea43a513990f05e08f7469180
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
