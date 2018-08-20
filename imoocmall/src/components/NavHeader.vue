<template>
    <div class="header">
      <link rel="stylesheet" href="http://at.alicdn.com/t/font_677068_yrj4p9aappn.css">
      <div class="box-shadow" v-show="boxShadow" @click.self="unsubmit"></div>
      <div class="logo"></div>
      <div v-show="login" class="log log_in" @click="submit">Log in
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <!-- <div>{{username}}</div> -->
      <div v-show="logout" class="log log_out"  @click="unsubmit">{{username}}  
        Log out
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <div v-show="surface" class="loginBox">
        <div id="title">用户登录界面</div>
        <div style="color:red" class="errormsg">:{{msg}}</div>
        <div class="_input">
            <i class="iconfont icon-people"></i>
            <input type="text" v-model="user" placeholder="请输入用户名" @keyup.enter="loginevent">  
        </div>
        <br>
        <div class="_input">
            <i class="iconfont icon-i-pwd"></i>
           <input type="password" v-model="pwd" placeholder="Password" @keyup.enter="loginevent" >
        </div>
        <a href="javascript:;" class="btn-mm" @click="loginevent">登     陆</a>
        </div>
        
       
     </div>
      
</template>
<script >
  
</script>
<script>
import axios from 'axios'
import Navbread from './Navbread'
 export default {
   data () {
     return {
       login:true,
       logout:false,
       surface:false,
       boxShadow:false,
       msg:'',
       user:'',
       pwd:'',
       username:'',
      
     }
   },
   mounted() {
     this.checkLogin();
   },
   components: {
     Navbread
   },
   methods:{
     submit(){
       this.surface=true;
      //  alert('111111111');
      this.boxShadow=true;
     },
     unsubmit(){
       axios.post('/users/logout').then((response)=>{
         let res=response.data;
         console.log(res);
          this.login=true;
          this.logout=false;
          this.surface=false;
          this.boxShadow=false;
          this.msg='';
       })
     },
     checkLogin(){
       axios.get('/users/checkLogin').then((response)=>{
         let res=response.data;
        if(res.status=='0')
        {
          this.login=false;
          this.logout=true;
          this.username=res.result;
        }
        else{
          if(this.$route.path!='/')
          {
            this.$router.push({
              path:'/'
            })
          }
        }
       })
     },
     loginevent(){
       if(!this.user || !this.pwd){
         this.msg='请输入账号或者密码';
       }
       else
        { 
          axios.post('/users/login',{
          userName:this.user,
          userPwd:this.pwd
        }).then((response)=>{
            let res=response.data;
            console.log(res);
            if(res.status=='0')
            {
              this.username=res.result.userName;
              // this.msg='登录成功'
              this.surface=false;
              this.logout=true;
              this.login=false;
              this.boxShadow=false;
            }
            else{
              this.msg='账号或者密码错误';
            }
        })
      // axios.post('/users/login').then((res)=>{
      //   console.log(res);
      // })
     }}
   
   }
 }
</script>

<style <style lang="less">


.header {
  
  //  margin-top:-70px;
   position: relative;
   &:after{
    display: block;
    content: '';
    clear: both;
  }
  .logo{
    background-image: url('./../../static/logo.png');
    width:150px;
    height: 60px;
    margin-left: 30px;
    float: left;
  } 
  .log{
    float: right;
    font-size: 26px;
    right: 10px;
    top: 16px;
    position: absolute;
  }
  .iconfont {
    font-size: 35px;
  } 
  .loginBox{  
    position: fixed;
    top:35%;
    left: 35%;
    width: 535px;
    height: auto;
    border: 1px solid black;
    flex-flow:column;
    z-index:1000;
    background-color: white;
    
    #title{
      font-size: 26px;
      margin-left:10%;
      height: 40px;
      line-height: 40px;
      margin-bottom: 10px;
    }
   
    .people,.pwd{
      background-image: url("./../../static/icon.png");
      height: 50px;
      width: 50px;
    }
    .people{
      background-position: 30px 40px;
    }
    ._input{
     
      margin-left:10%;
      position: relative;
      border: 1px solid gray;
      text-align: center;
      height: 40px;
      width: 80%;
      line-height: 40px;
      .iconfont{
        float: left;
      }
      >input{ 
        position: absolute;
        height: 38px;
        width: 80%;
        line-height: 38px;
        left: 40px;
        border: 0;
        
      }
      
    }
     .btn-mm{
        margin-top:20px;
        display: inline-block;
        margin-left:10%;
        width: 80%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #009de6;
        color: white;
        margin-bottom: 60px;
        font-size:22px;
      }
      .errormsg{
        margin-left: 10%;
      }
    
    

  }
  
}
  @media screen and (max-width:1500px)and (min-width: 1000px){
    input{
      margin-left: 0px;
    }
  @media screen and (max-width:1000px) and (min-width: 768px){
    input{
      margin-left: 0px;
    }
     
}
  }
 
</style>
