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
    <!-- <button @click="addItem">add</button><br> -->
    <!-- <componentA :dataA="dataa"></componentA> -->
    <!-- <a :href="link" :title="msg">baidu</a>
    <a :class="red">hongse</a>
    <a :style="pink">blue</a> -->
    <!-- 条件渲染 -->
    <a v-if="ispartA">partA</a>
    <!-- <a v-show="!ispartA">partB</a> -->
    <a v-else>no data</a>
    <button @click="toggle">toggle</button><br><br>
    <input @keydown.enter="onKeydown"><br><br>

    <!-- 自定义事件my-event -->
    <!-- 监听子组件my-event事件 -->
    <componentA @my-event="onComaEvent"></componentA><br>
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

    <!-- 文本绑定 -->
    <!-- <input v-model="myValue" type="text">
    <p>{{myValue}}</p> -->

    <!-- v-model支持的三种修改器 -->
    <!-- lazy延迟 当输入完成后 enter 跳出 才会更新值 -->
    <!-- <input v-model.lazy="myValue" type="text"><p>{{myValue}}</p> -->
    <!-- number 强制值为数字  没有number输入数字也是string
    先输入非数字后输入数字为string
    先输入数字后输入非数字enter之后会取消掉非数字 显示为number
    <input v-model.number="myValue" type="text">
    <p>{{typeof myValue}}</p> -->
    <!-- trim自动过滤用户输入的首尾空格 -->
    <input v-model.trim="myValue" type="text">
    <p>{{myValue}}</p>
    <!-- 多选绑定
    <input v-model="myBox" type="checkbox" value="banana1">banana1
    <input v-model="myBox" type="checkbox" value="banana2">banana2
    <input v-model="myBox" type="checkbox" value="banana3">banana3
    <p>{{myBox}}</p> -->
    <!-- 单选
    <input v-model="sex" type="radio" value="man">man
    <input v-model="sex" type="radio" value="woman">woman
    {{sex}} -->
    <!-- select
    <select v-model="selection">
      <option value="1">河北</option>
      <option value="2">北京</option>
      <option value="3">河南</option>
    </select>
    {{selection}} -->
    <!-- select用v-for
    <select v-model="selection">
      <option v-for="item in selectOption" :value="item.value">
        {{ item.text }}
      </option>
    </select>
    {{selection}} -->
    <!-- <vSelect @onSelect=" " :list="selectOption"></vSelect> -->


  </div>
</template>

<script>
//引入当前文件
import componentA from './components/new'
import Vue from 'vue'
export default {
  //注册组件
  components:{
    componentA:componentA//可以简写为componentA
  },
  name: 'App',
  data(){
    return{
      selectOption:[
        {text:'apple1',value:0},
        {text:'apple2',value:1},
        {text:'apple3',value:2}
      ],
      selection:null,
      myValue:'',
      myBox:[],
      sex:[],
      link:'http://www.baidu.com',
      msg:'<span>hi</span>',
      dataa:23,
      red:'red',
      pink:{"color":'pink'},
      ispartA:true,
      // num:1,
      status:true,
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
    },
    //相当于toggle:function(){}
    toggle(){
      this.ispartA=!this.ispartA
    },
    onKeydown(){
      console.log('on key down');
    },
    onComaEvent(parmfromnew){
      console.log('onComaEvent' + parmfromnew);
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
.red{
  color: red
}
</style>
