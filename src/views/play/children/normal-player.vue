<template>
  <div class="normal">
      <!-- 头部 -->
      <div class="header">
          <div class="icon" @click="closeAction">
            <span class="iconfont icon-jiantou1"></span>
          </div>
          <div class="info">
              <span>{{name}}</span>
              <p>{{singer}}</p>
          </div>
      </div>
      <!-- 唱片 -->
      <div class="center">
          <div class="image">
              <div class="wrap">
                <img :src="picUrl">
              </div>
          </div>
      </div>
      <!-- 控制台 -->
      <div class="bottom">
          <div class="speed">
              <span>倍速听歌</span>
              <span v-for='item in playNum' :key='item' :class="{active:selectNum==item}">x{{item}}</span>
          </div>
          <!-- 进度条 -->
          <div class="progress">
              <progres v-model="progress"/>
          </div>
          <div class="handle">
            <span class="iconfont" :class="playMode[selectPlayMode].icon"></span>
            <span class="iconfont icon-shangyiqu101"></span>
            <span class="iconfont" :class="[isPlay ? pauseIcon : playIcon]"></span>
            <span class="iconfont icon-xiayiqu101"></span>
            <span class="iconfont icon-liebiao"></span>
          </div>
      </div>
  </div>
</template>

<script>
import progres from './progress'
export default {
    components:{
        progres
    },
    data(){
        return{
            playNum: [0.75, 1, 1.25, 1.5, 2],
            selectNum: 1,
            isPlay: true,
            picUrl:
                "https://p2.music.126.net/HvB44MNINoLar8HFbRjIGQ==/109951165142435842.jpg",
            name: "天外来物",
            singer: "薛之谦",
            playIcon: "icon-bofang1",
            pauseIcon: "icon-plus-pause",
            playMode: [
                {
                type: 0, //顺序
                icon: "icon-shunxubofang",
                },
                {
                type: 1, //单曲循环
                icon: "icon-danquxunhuan1",
                },
                {
                type: 2, //随机播放
                icon: "icon-suiji",
                },
            ],
            selectPlayMode: 0,
            progress: 0.3
        }
    },
    methods:{
        closeAction(){
            this.$emit('closeHandle');
        }
    }
}
</script>

<style lang="scss" scoped>
.normal{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    // z-index: 300;
    background: rgb(242, 243, 244);
    .header{
        width: 100%;
        height: 50px;
        display: flex;
        box-sizing: border-box;
         padding: 5px 10px;
         position: absolute;
         left: 0;
         top: 0;
         background: lightgreen;
        .icon{
            width: 34px;
            height: 34px;
            transform: rotate(90deg);
            text-align: center;
            line-height: 34px;
            iconfont{
                font-size: 30px !important;
            }
        }
        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-left: 15px;
            span{
                color: #333;
                font-size: 18px;
            }
            p{
                color: #999;
                font-size: 12px;
            }
        }
    }
    .center{
        width: 100%;
        position: absolute;
        left: 0;
        top: 50px;
        bottom: 180px;
        background: darkgray;
        .image{
            width: 200px;
            height: 200px;
            position: absolute;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
            .wrap{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                overflow: hidden;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .bottom{
        width: 100%;
        height: 180px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
        .speed{
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                display: block;
                font-size: 16px;
                padding: 7px;
                color: #eee;
                &.active{
                    border: 1Px solid darkred;
                    border-radius: 10px;
                    color: darkred;
                }
            }
        }
        .progress{
            width: 100%;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .handle{
            width: 100%;
            box-sizing: border-box;
            padding: 20px 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .iconfont {
            color: #f2f3f4;
            font-size: 32px;
                &:nth-of-type(3) {
                font-size: 44px;
                }
            }
        }
        
    }
}
</style>