<template>
    <section class="bread">
        <div class="bread-wrap">
            <nav class="">
                <div class="bb" >
                <a href="/">
                    Home
                </a>
                <slot></slot>
                </div>
            </nav>
        </div>
    </section>
</template>
<style>
.bb{
    position: absolute;
    left:56px;
}
  .bread{
      height: 45px;
      line-height: 45px;
      background-color: #f0f0f0;
      width: 100%;
      margin: 0;
      padding: 0;
  }
  .bread-wrap{
      padding: 0 10px;
      font-size: 14px;
      color: #a1a1a1;
      position: relative;
  }
  .bread-wrap a{
    position: relative;
      margin-right: 20px;
  }
  .bread-wrap a:after{
      position: absolute;
      top: 0px;
      content:'/';
      height:20px;
      line-height: 20px;
  }
  .bread-wrap span{
      color:#d1434a;
  }
</style>
<script>

</script>
