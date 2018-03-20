<template>
  <div id="app">
    <!-- {{ msg }} -->
    <!-- <p v-html="msg">{{ msg }}</p>
    <p v-text="msg">{{ msg }}</p>
    {{ num + 1}}<br>
    {{ status ? 'success' : 'fail'}} -->

    <!-- 以下两种一样
    <p v-for="item in items">
      {{ item.name }} - {{ item.price }}
    </p>
    <p v-for="item in items" v-text="item.name + ' - ' + item.price"></p> -->

    <!-- 渲染数组 -->
    <ul>
      <li v-for="(item,index) in items">
        {{ index }} -{{ item.name }} - {{ item.price }}
      </li>
    </ul>
    <button @click="addItem">add</button>

    <!-- 渲染对象 -->
    <!-- <ul>
      <li v-for="(value,key) in objList">
        {{key+value}}
      </li>
    </ul> -->

    <!-- 添加odd样式
    <p v-for="(item,index) in items" v-bind:class="{odd:index % 2}">
      {{ index }} -{{ item.name }} - {{ item.price }}
    </p> -->

    <!-- 组件渲染 -->
    <!-- vue1.0 -->
    <!-- <component-a></component-a>  -->
    <!-- <componentA v-for="(value,key) in objList" :key="key"></componentA> -->
  </div>
</template>

<script>
//引入当前文件
// import componentA from './components/new'
import Vue from 'vue'
export default {
  //注册组件
  // components:{
  //   componentA:componentA
  // },
  name: 'App',
  data(){
    return{
      // msg:'<span>hi</span>',
      // num:1,
      // status:true,
      items:[
        {name:'apple1',price:10},
        {name:'apple2',price:20},
        {name:'apple3',price:30}
      ],
      // objList:{
      //     name:'apple1',
      //     price:10,
      //     weight:10,
      //     color:'red'
      // }
    }
  },
  methods:{
    addItem:function(){
      //列表渲染更新Vue全局方法
      Vue.set(this.items,1,{
        name:'apple4',
        price:40
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
