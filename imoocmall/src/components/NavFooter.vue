<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__secondary">
        <div class="footer__inner">
          <div class="footer__region">
            <span>Region</span>
            <select class="footer__region__select">
              <option value="en-US">USA</option>
              <option value="zh-CN">China</option>
            </select>
          </div>
          <div class="footer__secondary__nav">
            <span>Copyright © 2017 IMooc All Rights Reserved.</span>
            <a href="#">
              About Us
            </a>
            <a href="#">
              Terms &amp; Conditions
            </a>
            <a href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
    .footer{
      font-size: 12px;
      height: 100px;
      width: 100%;
      color: #ada9a5;
      
    }
    .footer__inner{
       margin-left:  10%;
       margin-right: 10%;
       position: relative;
       height: 100px;
       line-height: 100px;
      }
    a{
      color: #ada9a5;
    }
    .footer__region{
      position: absolute;
      left: 0;
    }
    .footer__secondary__nav
    {
      position: absolute;
      right:0;
    }

</style>
