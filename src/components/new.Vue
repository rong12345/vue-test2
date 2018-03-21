<template>
  <div>
    {{ msg }}
    <button @click="emitMyEvent">emit</button>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  data () {
    return {
      msg: 'this is component a'
    }
  },
  methods:{
    emitMyEvent(){
      //emitMyEvent事件触发后自动触发my-event
      this.$emit('my-event',this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
