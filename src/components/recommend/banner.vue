<template>

  <div class="banner">
      <div class="mask"></div>
      <div class="swiper-container" ref="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item,index) in data' :key=index>
                <img :src="item"  />
            </div>
        </div>
        <div class="swiper-pagination"></div>    
    </div>
    
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.css";
export default {
  props:{
    data:Array
  },
  watch:{
    data(){
      this.$nextTick(()=>{
        const swiper = new Swiper(this.$refs.banner,{
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            loop : true,
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner{
    width: 100%;
    height: 160px;
    position: relative;
    // overflow: hidden;
    .swiper-container{
      width: 98%;
      height: 100%;
      position: absolute;
      left: 1%;
      top: 0;
      border-radius: 6px;
      // overflow: hidden;
      .swiper-slide {
      width: 100%;
      height: 100%;
      overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .mask{
      width: 100%;
      height: 400px;
      position: absolute;
      left: 0;
      bottom: 50px;
      background: #d44439;
    }
    
    
}
</style>
<style lang="scss">
.swiper-pagination-bullet-active{
      background: #f1f2f3;
    }
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 100%;
    }
</style>