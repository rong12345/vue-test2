<template >
  <div>
      <!-- <button v-on:click='show = !show'>toggle</button> -->
      <button @click='tog'>toggle</button>
      <div class="app">
        <!-- <transition  name="my-trans">
          <p v-show="show"> i am show</p>
          <p v-if="show"> i am show</p>
        </transition> -->
        <!-- out-in 切换时旧的先出去新的再进来 -->
        <transition  name="fade" mode="out-in">
          <!-- 标签名相同要指定key -->
          <div :is="change"></div>
          <!-- <com-a></com-a> -->
        </transition>

      </div>
  </div>
</template>
<script type="text/javascript">
  import Vue from 'vue'
  import comA from './components/compontA'
  import comB from './components/componentB'
  export default{
    // 注册子组件
    components:{
      comA,comB
    },
    data(){
      return{
        // show:true,
        change:'com-a'
      }
    },
    methods:{
      getMyEvent(hello){
        console.log('msg:' + hello);
      },
      tog(){
        if(this.change === 'com-a'){
          this.change = 'com-b'
        }else{
          this.change = 'com-a'
        }
      }
    }

  }
</script>
<style media="screen">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.my-trans-enter-active,.my-trans-leave-active {
  transition: opacity .5s ease-out;
}
.my-trans-enter,.my-trans-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
/* .my-trans-leave-to {
  transform: translateY(500px);
  opacity: 0;
} */
.app{
  width: 100px;
  height: 200px;
  padding-left: 50px;
  padding-top: 100px;
}
</style>
