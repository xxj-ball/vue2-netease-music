<template>
  <div class="home ">
      <header class="header">
          <span class="iconfont icon-caidan"></span>
          <span>云音乐</span>
          <span class="iconfont icon-41"></span>
      </header>
      <nav class="nav">
        <router-link to="recommend" class="menu-item">
          <span>推荐</span>
        </router-link>
        <router-link to="singers" class="menu-item">
          <span>歌手</span>
        </router-link>
        <router-link to="rank" class="menu-item">
          <span>排行榜</span>
        </router-link>
      </nav>
      <router-view/>
      <play/>
  </div>
</template>
<script>
import play from './play'
export default {
  components:{
    play
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: 50px;
  background: #d44439;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 10px;
  color:#f1f1f1;
  // z-index: 10;
  span{
    font-size: 20px;
    &.iconfont{
      font-size:25px;
    }
  }
}
.nav{
  width: 100%;
  height: 44px;
  background:#d44439 ;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color:#f1f1f1;
  .menu-item{
    flex: 1;
    height: 40px;
    color: #f1f1f1;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    &.router-link-active{
      font-weight: 700;
      span{
        border-bottom: 2px solid #f1f1f1;
      }
      span{
        padding-bottom: 3px;
      }
    }
  }
}


</style>