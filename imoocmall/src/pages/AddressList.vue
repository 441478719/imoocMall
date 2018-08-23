<template>
 <div>
      <link rel="stylesheet" href="http://at.alicdn.com/t/font_799328_cb4jlawj29.css">
     <nav-header></nav-header>
     <nav-bread><span>Addresslist</span></nav-bread>
     <div class="addressList">
         <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <symbol id="icon-add" viewBox="0 0 31 32">
              <title>add</title>
              <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
            </symbol>
            <symbol id="icon-ok" viewBox="0 0 32 32">
              <title>ok</title>
              <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
            </symbol>
            <symbol id="icon-edit" viewBox="0 0 32 32">
              <title>edit</title>
              <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
            </symbol>
            <symbol id="icon-del" viewBox="0 0 32 32">
              <title>delete</title>
              <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
              <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
              <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
              <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            </symbol>
            <symbol id="icon-clock" viewBox="0 0 32 32">
              <title>clock</title>
              <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
            </symbol>
            <symbol id="icon-question" viewBox="0 0 32 32">
              <title>question</title>
              <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
              <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
              <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
            </symbol>
          </defs>
        </svg>
        <div class="container">
          <div class="check-step">
              <ul>
                <li class="comfirm"><span>Confirm</span> address</li>
                <li><span>View your</span> order</li>
                <li><span>Make</span> payment</li>
                <li><span>Order</span> confirmation</li>
              </ul>
          </div>
          <div class="page-title">
            <h2><span>SHIPPING ADDRESS</span></h2>
          </div>
          <div class="addr-list">
            <ul>
              <li v-for="(item,index) in addressListFilter" :key="index" @click="checkIndex=index;selectedAddr=item.addressId" :class="{'checkItem':checkIndex==index}">
                  <dl>
                    <dt class="name">{{item.userName}}</dt>
                    <dd class="addr">{{item.streetName}}</dd>
                    <dd class="tel">{{item.tel}}</dd>
                    <!-- {{selectedAddr}} -->
                  </dl>
                  <div class="comfirmAddress" v-if="item.isDefault" >
                      <span>Defalut address</span>
                  </div>
                  <div class="comfirmAddress " v-if="!item.isDefault" :class="{'checkComfirm':checkIndex!=index}" @click="setDef(item)">
                    <span >Set defalut </span>
                  </div>
                  <div class="delComfirm">
                    <a href="javascript:;" @click="delAddr(item)">
                        <i class="iconfont icon-shanchu"></i>
                    </a>
                  </div>
              </li>
              <li class="addr-new">
                    <div class="add-new-inner">
                      <i class="icon-add">
                        <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                      </i>
                      <p>Add new address</p>
                    </div>
                  </li>
            </ul>
          </div>
          <div class="addr-method" > 
              <a @click="expand" href="javascript:;">more
                <i class="i-updown" :class="{'itransform':tran}">
                  <i class="i-updown-l"></i>
                  <i class="i-updown-r"></i>
                </i>
              </a>
              
          </div>
          <div class="page-title">
            <h2><span>SHIPPING MEHTHOD</span></h2>
          </div>
          <div class="addr-list" >
            <ul>
              <li>
                <dl>
                  <dt class="name">Standarding shipping</dt>
                  <dd class="addr">Free</dd>
                  <dd class="tel"><p>Once shipped，Order should arrive in the destination in 1-7 business days</p></dd>
                </dl>
              </li>
            </ul>
          </div>
          <div class="addr-footer">
              <router-link :to="{path:'addressComfirm',query:{'addressId':selectedAddr}}" class="btn-s">NEXT</router-link>
          </div>
        </div>
     </div>
     <nav-footer></nav-footer>
 </div>
</template>

<script>
import NavHeader from "./../components/NavHeader";
import NavBread from "./../components/Navbread";
import NavFooter from "./../components/NavFooter";
import Modal from "./../components/Modal";
import axios from "axios";
 export default {
   data () {
     return {
       addressList:[],
       limit:3,
       checkIndex:'',
       isDef:false,
       tran:false,
       selectedAddr:''
     }
   },
   components: {
       NavHeader,
       NavBread,
       NavFooter,
       Modal
   },
   mounted () {
     this.init();
   },
   computed:{
     addressListFilter(){
       return this.addressList.slice(0,this.limit);
     }
   },
   methods:{
     init(){
        axios.get("users/addressList").then((response)=>{
       let res=response.data;
       if(res.status=='0')
       {
         this.addressList=res.result;
       }
     })
     },
     expand(){
       this.tran=!this.tran;
       if(this.limit==3)
       {
         this.limit=this.addressList.length;
       }
       else
       {
         this.limit=3;
       }
     },
     delAddr(item){
       axios.post('/users/delAddress',{
         addressId:item.addressId
       }).then((response)=>{
         let res=response.data;
          if(res.status=='0')
          {
            this.init();
          }
       })
     },
     setDef(item){
       axios.post("/users/setDefalutAddr",{
         addressId:item.addressId
       }).then((response)=>{
         let res=response.data;
         if(res.status=='0')
         {
           this.init();
         }
       })
     }
    

   }
 }
</script>

<style>
.container{
  /* height: 100%; */
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 22px;
  background: #f5f7fc;
  
}
.check-step{
  padding: 30px 0 20px 0;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
 
}
.check-step ul::after{
  content: '';
  display: block;
  clear: both;
}
.check-step ul li{
  float: left;
  width: 23%;
  height: 100%;
  color:#999;
  text-align: center;
  position: relative;
   border-bottom: 2px solid #ccc;
   padding-bottom: 30px;
  /* padding-bottom: 30px; */
}
.check-step ul{
  padding: 0px;
}
.check-step ul li::after{
  position: absolute;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  content: '';
  bottom: -7px;
  margin-left: -7px;
  background: #ccc;
  left: 50%;
  
}
.check-step ul li.comfirm{
  color: #d1434a;
  border-color: #d1434a;
}
.check-step ul li:first-child::after{
  background: #d1434a;

}
.page-title{
  font-size: 16px;
  color: #605F5F;
  letter-spacing: 2px;
}
.addr-list ul li {
  float: left;
  position: relative;
  margin-left: 20px;
  border: 2px solid #e9e9e9;
  width: 20%;
  margin-bottom: 20px;
  background: white;
}
.addr-list ul::after{
  content: '';
  clear: both;
  display: block;
}
.addr-list ul{
  padding: 0;
  
}
.addr,.name ,.tel{
  margin-left: 10px;
}
.name{
  font-size: 16px;
  color: #333;
}
.addr{
  margin-bottom: 20px;
  font-size: 14px;
  color: #333;
}
.tel{
  font-size: 14px;
  color: #605F5F;
}
.comfirmAddress{
  display: block;
  font-size: 14px;
  color:#ee7a23;
  margin-left: 10px;
  transition: color 1s ease-in-out;
}
.checkComfirm{
  color: white;
}
.addr-method{
  text-align: center;

}
.addr-method a{
  font-size: 14px;
  color: #d1434a;
}
.addr-list ul li.checkItem{
  border-width: 2px;
  border-color: #ee7a23;
}
.add-new-inner{
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 35px;
}
.icon-add{
  display: inline-block;
  width: 50px;
  height: 50px;
}
.i-updown{
  display: inline-block;
  position: relative;
  width: 14px;
  height: 6px;
  transition: all 1s ease-in-out;
}
.i-updown-l,.i-updown-r{
  position: absolute;
  display: inline-block;
  width: 7px;
  height: 3px;
  border-top: 1px solid #ee7a23;
  top: 3px;
 
  /* transform: rotate(180deg); */
}
.i-updown-r{
  right: 0px;
  transform: rotate(-40deg);
}
.i-updown-l{
  left: 0px;
  transform: rotate( 40deg);
}
.itransform{
  transform: rotate(180deg);
}
.delComfirm{
  position: absolute;
  right: 20px;
  bottom: 0px;
  
}
.delComfirm a i{
  display: block;
  height: 40px;
  width: 40px;
  font-size: 40px;
}
.btn-s{
  display: block;
  letter-spacing: 2px;
  background: #d1434a;
  color: white;
  margin-left: 70%;
  width: 20%;
  text-align: center;
}
</style>
