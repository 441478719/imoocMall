<template>
    <div>
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_785929_li8xp0av72f.css">
        <nav-header></nav-header>
        <nav-bread>
            <span>CartList</span>
        </nav-bread>
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_799328_p2kvjz2nxd.css">
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="icon-add" viewBox="0 0 32 32">
                    <title>add2</title>
                    <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
                </symbol>
                <symbol id="icon-ok" viewBox="0 0 32 32">
                    <title>ok</title>
                    <path class="path1" d="M31.020 0.438c-0.512-0.363-1.135-0.507-1.757-0.406s-1.166 0.435-1.529 0.937l-17.965 24.679-5.753-5.67c-0.445-0.438-1.035-0.679-1.664-0.679s-1.219 0.241-1.664 0.679c-0.917 0.904-0.917 2.375 0 3.279l7.712 7.6c0.438 0.432 1.045 0.681 1.665 0.681l0.195-0.008c0.688-0.057 1.314-0.406 1.717-0.959l19.582-26.9c0.754-1.038 0.512-2.488-0.538-3.233z"></path>
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
                    <path class="path1" fill="#605f5f" d="M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
                    <path class="path2" fill="#605f5f" d="M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"></path>
                </symbol>
            </defs>
        </svg>
        <div class="cartList">
            <div class="cartList-title">
                <h2>MY CRAT</h2>
            </div>
            <div class="cartList-wrap">
                <ul>
                    <li>ITEMS</li>
                    <li>PRICE</li>
                    <li>QUANTITY</li>
                    <li>SUBTOTAL</li>
                    <li>EDIT</li>
                </ul>
            </div>
            <div class="cartList-content">
                <ul>
                    <li v-for="(item,index) in cartList" :key="index">
                        <div class="conten-1">
                            <div class="cartList-item-check">
                                <a href="javascript:;" class="btn-check" @click="check('checked',item)" :class="{'checked':item.checked==1}">
                                    <svg class="icon icon-ok">
                                        <use xlink:href="#icon-ok"></use>
                                    </svg>
                                </a>
                            </div>
                            <div class="cartList-image">
                                <img :src="'./../../static/'+item.productImage" alt="">
                            </div>
                            <div class="cartList-productName">
                                {{item.productName}}
                            </div>
                        </div>

                        <div class="cartList-salePrice">
                            {{item.salePrice |currency}}
                        </div>
                        <div class="cartList-quantity">
                            <a href="javascript:;" class="edit" @click="check('min',item)">-</a>
                            <span>{{item.productNum}}</span>
                            <a href="javascript:;" class="edit" @click="check('add',item)">+</a>
                        </div>
                        <div class="subtotal">
                            {{item.salePrice*item.productNum |currency}}
                        </div>
                        <div class="edit">
                            <a href="javascript:;">
                                <i class="iconfont icon-shanchu" @click="delproduct(item)"></i>
                            </a>
                        </div>
                    </li>

                </ul>
                
            </div>
           <div>
                <div class="selectAll">
                        <div class="content1">
                            <a href="javascript:;" class="btn-check" @click="sumTotal" :class="{'checked':checkAll}" >
                                <svg class="icon icon-ok">
                                    <use xlink:href="#icon-ok"></use>
                                </svg>
                            </a>
                        </div>
                        <div class="content1">
                            <span>slect all</span>
                        </div>
                        <div class="content2">
                            <span>item total:{{totalPrice |currency}}</span>
                        </div>
                        <div class="content3" >
                            <a href="javascript:;" @click="checkout" :class="{'content4':checkCount>0}">checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        <modal  :mdShow="delProduct" @close="closeModal">
            <span slot="message">是否确定删除商品</span>
            <div slot="btnGroup">
                <button class="btn-d" @click="deleteProduct">确定</button>
                <button class="btn-d" @click="closeModal">取消</button>
            </div>
        </modal>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from "./../components/NavHeader";
import NavBread from "./../components/Navbread";
import NavFooter from "./../components/NavFooter";
import Modal from "./../components/Modal";
import axios from "axios";
import { currency } from "./../util/currency.js";
export default {
  data() {
    return {
      cartList: [],
      checkItem: false,
      checkIndex: "",
      checkColor:false,
      
      delProduct:false,
      productInfo:''
    };
  },
  filters: {
    currency
  },
  mounted() {
    this.getCartList();
  },
  components: {
    NavHeader,
    NavBread,
    NavFooter,
    Modal
  },
  filters:{

  },
  computed:{
      checkAll(){
          return this.checkCount==this.cartList.length;
      },
      totalPrice(){
          let price=0;
          this.cartList.forEach((item)=>{
              if(item.checked=='1')
              {
                price+=item.productNum*item.salePrice;
              }
             
          })
          return price;
      },
      checkCount(){
          let k=0;
          this.cartList.forEach((item)=>{
              if(item.checked=='1')
              {
                  k++;
              }
          })
          return k;
      }
  },
  methods: {
    check(flag,item) {
     if(flag=='add')
     {  
         item.productNum++;
     }
     else if(flag=='min')
     {
         if(item.productNum<=1)
         return;
         else{
             item.productNum--;
         }
     }
     else
     {
         item.checked=item.checked=='1'?'0':'1';
     }
     axios.post('/users/editCart',{
         productId:item.productId,
         productNum:item.productNum,
         checked:item.checked

     }).then((response)=>{
         let res=response.data;
     })
    },
    getCartList() {
      axios.get("/users/cartList").then(response => {
        let res = response.data;
        this.cartList = res.result;
      });
    },
    sumTotal(){
        let k=0;
        this.cartList.forEach((item)=>{
            if(item.checked=='0'){
                k=1;
            }
        })
        if(k==1)
        {
        this.cartList.forEach((item)=>{
            item.checked='1';
            
        })
        }
        else
        {
             this.cartList.forEach((item)=>{
            item.checked='0';
            
        })
        }
    },
    deleteProduct(){
        axios.post('/users/deleteProduct',{
            productId:this.productInfo.productId
        }).then((response)=>{
            let res=response.data;
            if(res.status=='0')
            {
                this.getCartList();
                this.delProduct=false;
            }
        })
        
    },
    checkout(){
        if(this.checkCount>0)
        {
            this.$router.push({
                path:'/AddressList'
            });
        }
    },
    delproduct(item){
        this.delProduct=true;
        this.productInfo=item;
    },
    closeModal(){
        this.delProduct=false;
    }
   
  }
};
</script>

<style lang="less">
.cartList {
  height: 100%;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 22px;
  background: #f5f7fc;
  // margin: 0;
  
  .cartList-content {
    // text-align: center;
    margin: 0;
    padding: 0;
    ul {
      margin: 0;
      padding: 0;
      border-left: 1px solid #f5f7fc;
      border-right: 1px solid #f5f7fc;
      li {
        padding: 0;
        margin: 0;
        height: 100px;
        line-height: 100px;
        font-size: 0;
        background: white;
        border-bottom: 1px solid #f5f7fc;
        .cartList-item-check {
          display: inline-block;
          vertical-align: middle;
          height: 18px;
          width: 18px;
          margin-left: 20px;
          position: relative;
          .btn-check {
            box-sizing: border-box;
            display: inline-block;
            height: 18px;
            // vertical-align: middle;
            // line-height: 18px;
            width: 18px;
            border: 1px solid #999;
            border-radius: 50%;
            position: absolute;
            right: 0;
              top:0;
            .icon-ok {
              width: 70%;
              height: 80%;
              position: absolute;
              right: 0;
              top:0;
              // background-color:#ee7a23;
              fill: white;
            }
          }
          .checked {
            background-color: #ee7a23;
          }
        }
        .cartList-image {
          display: inline-block;
          vertical-align: middle;
          height: 80px;
          width: 80px;
          border: 1px solid #f5f7fc;
          margin-left: 20px;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .conten-1{
            display: inline-block;
            vertical-align: middle;
            width: 40%;
            box-sizing: border-box;
            
        }
        .cartList-productName {
          display: inline-block;
          vertical-align: middle;
          height: 80px;
          line-height: 80px;
          margin-left: 20px;
          font-size: 12px;
          font-weight: bold;
        }
        .subtotal{
            display: inline-block;
          vertical-align: middle;
         width: 20%;
         font-size: 12px;
         text-align: center;
        }
        .edit{
                display: inline-block;
                vertical-align: middle;
                width: 10%;
                text-align: center;
                a i {
                    font-size: 30px;
                }
        }
        .cartList-salePrice {
          display: inline-block;
          vertical-align: middle;
          width: 10%;
            font-size: 12px;
            box-sizing: border-box;
            text-align: center;
        }
        .cartList-quantity {
          display: inline-block;
          vertical-align: middle;
          width: 20%;
          font-size: 12px;
          box-sizing: border-box;
          text-align: center;
          .edit {
            background: #f0f0f0;
            display: inline-block;
            vertical-align: middle;
            width: 40px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            color: #605f5f;
          }
          span {
            display: inline-block;
            
            vertical-align: middle;
          }
        }
      }
    }
  }
  .selectAll{
      position: relative;
      margin-top: 30px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: white;
      border-bottom: #999;
      .content2{
          position: absolute;
          right: 10%;
          display: inline-block;
          vertical-align: middle;
          margin-left: 480px;
          font-size: 16px;
      }
      .content3{
          position: absolute;
          right: 0px;
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
          width: 10%;
          a{
              display: inline-block;
              height: 100%;
              width: 100%;
              color: white;
              background: #605f5f;
              text-align: center;
              letter-spacing: 2px;
          }
          .content4{
              background: #d1434a;
              
          }
      }
      .content1{
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
            .checked {
            background-color: #ee7a23;
          }
          span{
               
               margin-left: 20px;
          }
           .btn-check {
                box-sizing: border-box;
                display: inline-block;
                vertical-align: middle;
                margin-left: 20px;
                height: 18px;
                width: 18px;
                border: 1px solid #999;
                border-radius: 50%;
                position: relative;
                .icon-ok {
                    position: absolute;
                        width:100%;
                        height: 100%;
                        fill: white;
                        }
                    }
      }
  }
  .cartList-wrap {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: #605f5f;
    color: white;
    height: 50px;
    line-height: 50px;
    ul li {
      float: left;
      box-sizing: border-box;
      text-align: center;
      border-right: 1px solid #f0f0f0;
    }
    ul:after {
      content: "";
      display: block;
      clear: both;
    }
    ul {
      padding: 0;
      margin: 0;
    }
    ul li:nth-child(1) {
      width: 40%;
    }
    ul li:nth-child(2) {
      width: 10%;
    }
    ul li:nth-child(3) {
      width: 20%;
    }
    ul li:nth-child(4) {
      width: 20%;
    }
    ul li:nth-child(5) {
      width: 10%;
      border: 0;
    }
  }
}
</style>

