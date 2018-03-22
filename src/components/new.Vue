<template>
  <div>
    {{ msg }}
    <!-- {{ number }} -->
    {{ myValue }}
    <button @click="emitMyEvent">emit</button>
    <!-- 插槽 在父组件内写的内容 no slot是没有插槽内容时显示的-->
    <!-- <slot>no slot</slot> -->
    <!-- 具名插槽 -->
    <!-- <slot name="header">no header</slot>
    <p>csdacds</p>
    <slot name="footer">no footer</slot> -->
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  //子组件声明
  // props:['number'],//数组里面是字符串
  props:{             //对象
    // 'number':[Number,String,Object],
    'my-value':[Number,String]
  },
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
