<template >
  <div>
    <!-- is模板引入方法 -->
    <!-- <p is='component-a'></p> -->
    <!-- 动态 -->
    <!-- <p :is='comtorender'></p> -->
    <!-- <component-a number=55></component-a> -->
    <input type="text" v-model.number="myValue">
    <!-- keep-alive内置标签 -->
    <!-- <keep-alive>
      <p :is='currentView'></p>
    <keep-alive> -->

    <component-a :my-value="myValue" @my-event="getMyEvent">
      <p>child</p>
      <!-- 具名插槽 -->
      <p slot="header">header</p>
    </component-a>
  </div>
</template>
<script type="text/javascript">
  import Vue from 'vue'
  import componentA from './components/new'
  export default{
    data(){
      return{
        currentView:'component-a',
        comtorender:'component-a',
        myValue:'',
        items:[
          {msg:'apple',number:'10'},
          {msg:'banana',number:'20'}
        ]
      }
    },
    methods:{
      getMyEvent(hello){
        console.log('msg:' + hello);
      }
    },
    // 注册子组件
    components:{
      componentA
    }
  }
</script>
<style media="screen">

</style>
