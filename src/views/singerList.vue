<template>
  <div class="singerList">
      <div class="header">
          <span></span>
          <span>{{data.name}}</span>
      </div>
      
      <div class="back" ref="back" :style="{transform: `scale(${scale})`}">
        <img :src="data.picUrl" />
        <div class="mask"></div>
      </div>
    <scroll class="scr" :handleScroll="handleScrollAction">
      <div class="box"></div>
      <div class="btn">
        <span class="iconfont icon-tianjia" :style="{opacity}">收藏</span>
      </div>
      <ul class="list">
        <li class="play"><span>播放全部({{list.length}})首</span></li>
        <li v-for="(item,index) in list" :key='index' class="item">
          <span class="index">{{index+1}}</span>
          <div class="sing">
            <span class="name1">{{item.name}}</span>
            <span class="name2">{{data.name}} - {{item.al.name}}</span>
          </div>
        </li>
      </ul>
      </scroll>
  </div>
</template>



<script>
import {mapState} from 'vuex';
export default {
  // props:{
  //     data:Object,
  //     list:Array
  //   },
  data(){
    return{
       scale: 1,
       opacity: 1,
    }
  },
  computed:{
    ...mapState({
      // singerList:(state)=>state.singer.list,
      list:(state)=>state.author.singerList,
      data:(state)=>state.author.singerObj
    }),
    
  },
  methods:{
    handleScrollAction({y}){
      if(y > 0){
        const height = this.$refs.back.offsetHeight;
        const targetHeight = height+y;
        this.scale = targetHeight / height;
      }else if(y <= 0 && y > -300){
        this.opacity = 1 - (-1) * y / 300;
      }
    },
  },
  watch:{
    list(newval){
      // console.log(newval);
    }
  },
  created(){
    this.$store.dispatch('author/singerAction',this.$route.params.id);
      // console.log(this.$route);
  }
}
</script>

<style lang="scss" scoped>
.singerList{
  width: 100%;
  .header{
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    padding: 0px 10px 5px;
    height: 44px;
    display: flex;
    z-index: 1;
    line-height: 44px;
    color: rgb(241, 241, 241);
    span{
      font-size: 16px;
      font-weight: 700;
    }
  }
  .back{
    width: 100%;
    height: 304px;
    position: relative;
    transform-origin: center top;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .mask{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.3);
  }
  .scr{
    width: 100%;
    position: absolute;
    top: 44px;
    left: 0;
    bottom: 0;
    z-index: 100;
  }
  .btn{
    padding-bottom: 20px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont{
      display: flex;
      height: 40px;
      padding: 0 30px;
      background: red;
      line-height: 40px;
      text-align: center;
      letter-spacing: 4px;
      border-radius: 25px;
      color: #f1f1f1;
    }
  }
  .list{
    background: #fff;
    .play{
        box-sizing: border-box;
        padding: 10px 0px;
        margin-left: 10px;
        position: relative;
        justify-content: space-between;
        border-bottom: 1px solid rgb(228, 228, 228);
        span{
          line-height: 24px;
          color: rgb(46, 48, 48);
        }
      }
    .item{
      width: 100%;
      box-sizing: border-box;
      height: 60px;
      display: flex;
      align-items: center;
      .index{
          flex-basis: 60px;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
      }
      .sing{
        width: 100%;
          display: flex;
          height: 100%;
          padding: 5px 0px;
          flex-direction: column;
          justify-content: space-around;
          border-bottom: 1px solid rgb(228, 228, 228);
          overflow: hidden;
        .name1{
          margin-top: 10px;
          font-size: 16px;
          color: rgb(46, 48, 48);
        }
        .name2{
          font-size: 12px;
          color: rgb(187, 168, 168);
        }
      }
    }  
  }
  // .scr{
  //   position: absolute;
  // }
  .box{
    // position: absolute;
    // top: 20px;
    width: 100%;
    height: 200px;
    opacity: 0;
  }
}
</style>