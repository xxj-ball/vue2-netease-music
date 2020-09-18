<template>
  <div class="miniPlayer">
      <div class="image" @click="action">
          <img :src="picUrl">
      </div>
      <div class="name">
          <span class="tit1">{{name}}</span>
          <span class="tit2">{{singer}}</span>
      </div>
      <div class="icon">
          <span class="iconfont player" :class="[isPlay ? pauseIcon : playIcon]"></span>
          <span class="iconfont icon-liebiao"></span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
    return {
      isPlay: true,
      picUrl: 'https://p2.music.126.net/HvB44MNINoLar8HFbRjIGQ==/109951165142435842.jpg',
      name: '天外来物',
      singer: '薛之谦',
      playIcon: 'icon-zanting1',
      pauseIcon: 'icon-stop',
      progress: 0.5
    }
  },
  methods:{
      action(){
          this.$emit('showAction');
      }
  }
}
</script>

<style scoped lang="scss">
.miniPlayer{
    width: 100%;
    height: 60px;
    background: #eee;
    box-sizing: border-box;
    padding: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    .image{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .name{
        margin-left: 14px;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        .tit1{
            font-size: 16px;
            color: #333;
        }
        .tit2{
            font-size: 12px;
            color: #999;
        }
    }
    .icon{
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        color: red;
        position: relative;
        .player{
            font-size: 18px;
            padding: 5px;
            margin-right: 10px;
        }
        .icon-liebiao{
            font-size: 28px;
        }
    }
}
</style>