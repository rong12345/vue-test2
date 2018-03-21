<template >
  <div>
    <input type="text" v-model="myValue">
    <!-- 剔除掉数字 -->
    <!-- 通过计算属性 更新只会根据myValue的值更新-->
    {{ myValueWithoutNum }}
    <!-- 通过方法 无论什么时候调用值都会从新获取myvalue处理-->
    {{ getmyValueWithoutNum() }}

    <ul>
      <li v-for="item in items">
        {{ item.msg + "+" + item.number}}
      </li>
    </ul>
    <button @click="change">change</button>
  </div>
</template>
<script type="text/javascript">
  import Vue from 'vue'
  export default{
    data(){
      return{
        myValue:'',
        items:[
          {msg:'apple',number:'10'},
          {msg:'banana',number:'20'}
        ]
      }
    },
    //计算属性
    computed:{
      myValueWithoutNum(){
        //删掉数字 把数字替换为空 正则表达式\d表示数字 g一个或多个
        return this.myValue.replace(/\d/g,'')
        // return Date.now()
      }
    },
    //属性监听
    watch:{
      myValue(val,oldval){
        console.log(oldval);
        console.log(val);
      },
      items:function(){
        this.tellUser()
      }
    },
    methods:{
      getmyValueWithoutNum(){
        return this.myValue.replace(/\d/g,'')
        // return Date.now()

      },
      change(){
        Vue.set(this.items,1,{
          msg:'pinaapple',
          number:'30'
        })
        // this.tellUser()
      },
      removeItem(){
        // this.tellUser()
      },
      tellUser(){
        alert('list change')
      }
    }
  }
</script>
<style media="screen">

</style>
