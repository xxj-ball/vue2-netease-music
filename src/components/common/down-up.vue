<template>
<div class="wrap-scroll" ref="scroll">
    <div class="view">
    <!-- 下拉刷新... -->

   <div class="pull-down" :style="{height: height+ 'px'}">
        <span class="icon loading" v-if="isPullDown">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </span>
        <span class="iconfont icon-fanhui" :class="{turn: canPullDown}" v-else></span>
        <span class="text">{{pullDownText}}</span>
    </div>
    <slot />
    <!-- 上拉加载更多... -->
    <!-- <div class="pull-up" v-if="canLoadMore">
        <img :src="pullImg" alt :class="{turn: canPullUpLoad}" />
        <span>{{pullUpText}}</span>
    </div> -->
    </div>
</div>
</template>

<script>
import gifLoading from "../../assets/loading.gif";
export default {
    data(){
        return{
            isPullDown:false,
            canPullDown:false,
            pullDownText:'下拉刷新...',

            height: window.devicePixelRatio * 40
        }
    },
    methods:{
      endPullDown(){
        this.scroll.scrollTo(0, -1 * this.height, 300);
        this.isPullDown = false;
      },
        scrollTop(){
            this.scroll.scrollTo(0,(-1) *this.height,0);
        }
    },
    mounted(){
        let scroll = this.scroll = new IScroll(this.$refs.scroll,{
            tap:true,
            click: true,
            probeType: 3,
        });
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        });
        this.scrollTop();
        scroll.on('scroll',()=>{
            if(this.isPullDown){
                return;
            }
            if(scroll.y<0 && scroll.y>(-1)*this.height){
                this.pullDownText='下拉刷新...';
                this.canPullDown=false;
            }else if(scroll.y>=0){
                this.pullDownText='释放立即刷新...';
                this.canPullDown=true;
            }
        });
        scroll.on('scrollEnd',()=>{
            if(this.isPullDown){
                return;
            }
            if(scroll.y<0 && scroll.y >(-1)*this.height){
                this.scrollTop();
            }else if(scroll.y>=0){
                this.pullDownText='正在加载...';
                this.isPullDown=true;
                this.$emit('pull-down');
            }
        })
    }
}
</script>

<style lang='scss' scoped>
.wrap-scroll{
    overflow: hidden;
    width: 100%;
    height: 100%;
}
// .view{
//     width: 100%;
//     height: 100%;
// }
.pull-down, .pull-up {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  .iconfont{
    transform: rotate(90deg);
    &.turn{
      transform: rotate(-90deg);
    }
  }
}
.iconfont {
  transform: rotate(-90deg);
  margin: 6px;
  transition: 300ms;
  &.turn{
    transform: rotate(90deg);
  }
}

@keyframes ani-scale {
  0%, 100%{
    height: 4px;
  }
  50%{
    height: 16px;
  }
}
.icon{
  display: flex;
  width: 20px;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 6px;
  i{
    background-color: #eee;
    width: 2px;
    height: 16px;
    animation: ani-scale 1s infinite ease-in;
    &:nth-of-type(1){
      animation-delay: -0.25s;
    }
    &:nth-of-type(2){
      animation-delay: -0.5s;
    }
    &:nth-of-type(3){
      animation-delay: -0.75s;
    }
  }
}
</style>