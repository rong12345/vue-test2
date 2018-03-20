// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

//全局组件注册
// Vue.component('my-header',{
//   template:'<p>this is my header</p>',
//   data:{
//
//   }
// })

//局部注册
var myHeaderChild = {
  template:'<p>this is my header child</p>',
}

var myHeader = {
  template:'<p><my-header-child></my-header-child>this is my header</p>',
  components:{
    'my-header-child':myHeaderChild
  },
  //function返回需要的data，避免直接引用赋值，
  //每个组件在实例化的过程中都是新的数据
  data:function () {
    return{
      f:1,
      h:2
    }
  }
}

//根组件
var root = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // template: '<p>hello {{msg}}</p>',
  // data:{
  //   msg:'vue'
  // }
  // components:{
  //   'my-header': myHeader
  // }
})

//获取实例化对象数据
root.$data
//实例方法
root.$on('emit',function(){})
