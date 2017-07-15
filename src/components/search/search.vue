<template>
  <Input v-model="value13" class='inputbox'>
        <Button slot="append" icon="ios-search"></Button>
    </Input>
</template>
<script>
  export default {
    name: 'search',
    data () {
      return {
        value13: ''
      }
    }
  }
</script>
<style lang="scss">
  .inputbox{
    width:200px;
    
  }
</style>
