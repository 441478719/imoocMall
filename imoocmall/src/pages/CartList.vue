<template>
 <div>
     <nav-header></nav-header>
     <nav-bread>
         <span>CartList</span>
     </nav-bread>
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
        <div>
            <ul>
                <li v-for="(item,index) in cartList" :key="index">
                    
                </li>
            </ul>
        </div>
    </div>




     <nav-footer></nav-footer>   
 </div>
</template>

<script>
import NavHeader from "./../components/NavHeader";
import NavBread from "./../components/Navbread";
import NavFooter from "./../components/NavFooter";
import Modal from "./../components/Modal"
import axios from "axios";
import {currency} from './../util/currency.js'
 export default {
   data () {
     return {
         cartList:[],
     }
   },
   filters:{
       currency
   },
   mounted () { 
        axios.get('/users/cartList').then((response)=>{
            let res=response.data;
            this.cartList=res.cartList;
        })
   },
   components: {
       NavHeader,
       NavBread,
       NavFooter,
       Modal,
   }
 }
</script>

<style lang="less">
     .cartList{
        height: 100%;
        width: 80%;
        padding-left: 10%;
        padding-right:10%;
        font-size: 22px;
        font-weight: bold;
        .cartList-wrap{
            box-sizing: border-box;
            padding:0;
            ul li{
                float: left;
               
            }
            ul:after{
                content:'';
                display: block;
                clear: both;
            }
            ul{
                padding: 0;
            }
            ul li:nth-child(1){
                width: 40%;
            }
            ul li:nth-child(2){
                width: 10%;
            }
            ul li:nth-child(3){
                width: 20%;
            }
            ul li:nth-child(4){
                width: 20%;
            }
            ul li:nth-child(5){
                width: 10%;
            }

        }
    }
 
</style>

