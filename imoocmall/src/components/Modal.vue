<template>
<div>
  <link rel="stylesheet" href="http://at.alicdn.com/t/font_798730_x1dskql9xel.css">
  <div class="box-shadow" v-show="mdShow"></div>
  <div class="modal" v-show="mdShow">
   <div class="md-header">
     <button class="md-close" @click="closeModal" >
       <i class="iconfont icon-cc-close"></i>
     </button>
   </div>
    <div class="content">
      <slot name="message"></slot>
    </div>
    <div class="btn-group" >
      <slot name="btnGroup"></slot>
    </div>
 </div>
</div>
    
</template>

<script>
 export default {
   props:['mdShow'],
   data () {
     return {
       
     }
   },
   methods:{
     closeModal(){
       this.$emit('close');
     }
   }
  
 }
</script>

<style>
.modal{
    position: fixed;
    top:35%;
    left: 35%;
    width: 535px;
    height: 259px;
    border: 1px solid black;
    flex-flow:column;
    z-index:1000;
    background-color: white;
    text-align: center;
    font-size: 14px;
    font-weight: 200;
}
.md-header{
  position: relative;
  height: 100px;
  width: 100%;
}
.md-close{
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.content{
  margin-bottom: 40px;
}
</style>
