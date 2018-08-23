<template>
  <div>
    <link rel="stylesheet" href="http://at.alicdn.com/t/font_785929_li8xp0av72f.css">
    <nav-header>
    </nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>
    <div id="container">
      <div id="back">

      </div>
      <div id="container-header">
        <span>Sort by: </span>
        <a href="javascript:;">default</a>
        <span>price</span>
        <a href="javascript:;" >
          <i class="iconfont icon-jiantou1-copy-copy cursecond" v-bind:class="{'curfirst':curflag}" @click="iconEvent"></i>
        </a>
        
      </div>
      <div class="container-body">
        <div class="left">
          <h1>Price:</h1>
          <a href="javascript:;" @click="curFilter('all')" :class="{'cur':priceLevel=='all'}">All</a>
          <ul>
            <li v-for="(item,index) in pricefiletr" :key=index  >
              <a href="javascript:;" @click="curFilter(index)" :class="{'cur':priceLevel==index}">{{item.startPrice}}  -  {{item.endPrice}}</a>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul id="goods">
            <li v-for="(item,index) in goodslist" :key="index">
              <div class="pic">
                <img v-bind:src="'./../../static/'+item.productImage" alt="">
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">{{item.salePrice |currency('$')}}</div>
                <div>
                  <a href="javascript:;" class="btn btn-m" @click="addCart(item.productId)">加入购物车</a>
                </div>
              </div>
              
              <!-- {{item.productImage}}  -->
            </li>
          </ul>
        <div class="view-more-normal" v-infinite-scroll="loadmore"  infinite-scroll-disabled="busy" infinite-scroll-distance="20">

          <img src="./../../static/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
        </div>
        </div>
      </div>
      <modal :mdShow="mdShow" @close="closeModal" >
        <p slot="message">请先登录否则无法加入到购物车中</p>
        <div slot="btnGroup">
            <button class="btn-c" @click="closeModal">关闭</button>
        </div>
      </modal>
      <modal :mdShow="mdShowCart" @close="closeModal" > 
        <p slot="message">加入购物车成功</p>
        <div slot="btnGroup">
          <a class="btn-d" @click="mdShowCart=false">继续购物</a>
          <router-link to="/CartList" class="btn-d" href="javascript:;">查看购物车
          </router-link>
        </div>
      </modal>
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
  data() {
    return {
      pricefiletr: [
        {
          startPrice: "0.00",
          endPrice: "100.00"
        },
        {
          startPrice: "100.00",
          endPrice: "500.000"
        },
        {
          startPrice: "500.00",
          endPrice: "1000.00"
        },
        {
          startPrice: "1000.00",
          endPrice: "5000.00"
        }
      ],
      goodslist: [],
      page: 1,
      pageSize: '8',
      sort: true,
      priceLevel: "all",
      curflag: true,
      busy:true,
      loading:false,
      mdShow:false,
      mdShowCart:false
    };
  },
  filters:{
    currency:currency
  },
  mounted() {
    this.getgoodslist();
    
  },
  components: {
    NavHeader,
    NavBread,
    NavFooter,
    Modal
  },
  methods: {
    addCart(productId){
      axios.post('/goods/addCart',{
        productId:productId
      }).then((response)=>{
        let res=response.data;
        if(res.status=='0')
        {
          this.mdShowCart=true;
        }
        else{
          this.mdShow=true;
        }
      })
    },
    loadmore(){
      this.busy=true;
      setTimeout(() => {
        // this.busy=false;cn
        this.page++;
        this.getgoodslist(true)
      }, 500);
    },
    closeModal(){
      this.mdShow=false;
      this.mdShowCart=false;
    },
    getgoodslist(flag) {
          let param = {
            page: this.page,
            pageSize: this.pageSize,
            sort: this.sort ? 1 : -1,
            priceLevel: this.priceLevel
          };
      axios.get("goods/list",{params:param}).then(response => {
        let res = response.data;
        // this.loading=true;
        if (res.status == "0") {
          if(flag){
            // this.loading=false;
            this.goodslist = this.goodslist.concat(res.result.list);
            if(res.result.count==0)
            {
              this.busy=true;
            }
            else{
              this.busy=false;
            }
          }
          else{
            this.goodslist=res.result.list;
            this.busy=false;
          }
        }
        else{
          this.goodslist=[];
        }
      });
    },
    iconEvent() {
      this.curflag = !this.curflag;
      this.sort=!this.sort;
      this.page=1;
      this.getgoodslist();
    },
    curFilter(index){
      this.priceLevel=index;
      this.page=1;
      this.getgoodslist();
    }
  }
};
</script>

<style <style lang="less">
#container {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  // float: left;
  position: relative;
  font-size: 10px;
  #container-header {
    &::after{
      display: block;
      content: '';
      clear: both;
    }
    text-align: right;
    // box-sizing: border-box;
    
    // width: 150px;
    height: 45px;
    line-height: 45px;
    // position: absolute;

    font-size: 18px;
    .cursecond {
      transition: all .5s ease-in;
      display: inline-block;
    }
    .curfirst {
      transform: rotate(180deg);
    }
  }
  #back {
    width: 100%;
    height: 45px;
    background-color: #605f5f;
    opacity: 0.3;
  }
  .container-body {
    background-color:#f5f7fc;
    // opacity: 0.2;
  }
 
  .left {
    text-align: left;
    float: left;
    // height: 100%;
    width: 27%;
    >h1{
      margin-left: 10%;
    }
    
    >a {
      margin-left: 10%;
      font-size: 22px;
      color: gold;
    }
    ul {
      // text-align: left;
      list-style: none;
      li{
        margin: 20px 0;
        font-size: 22px;
      }
     
    }
  }
  .right {
    width: 70%;
    float: right;
    font-size: 16px;
    ul {
      li {
        // height: 400px;
        text-align: left;
        float: left;
        width: 20%;
        border: 1px solid gray;
        margin-left: 15px;
        margin-top:10px;
        background: #fff;
      }
      li:hover{
        border: 1px solid yellow;
        transform: translateY(-5px);
        transition: all 0.3s ease-out;
      }

      .pic {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .price{
        margin: 10px 0;
        padding: 0 10px;
      }
      .name{
         margin: 10px 0;
          padding: 0 10px;
      }
      .btn{
        display: block;
        height: 40px;
        line-height: 40px;
        color: #d1434a;
        border: 1px solid #d1434a;
        font-weight: bold;
        font-size: 14px;
        white-space: nowrap;
        cursor: pointer;
        text-align: center;
        
       
      }
      .btn-m{
        padding: 0 10px;
      }
     
      .price{
        color: red;
      }
      button{
        width: 100%;
      }
    }
    ul:after {
      display: block;
      content: "";
      clear: both;
    }
  }
}
 .container-body:after{
      display: block;
      content: "";
      clear: both;
  }
</style>

