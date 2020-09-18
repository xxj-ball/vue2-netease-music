<template>
  <div class="play" :style="{height: showNormal?'100%':0}">
    <transition enter-active-class="mini-slide-in" leave-active-class="mini-slide-out">
      <mini-player v-show='isShow' @showAction='showPalyer'/>
    </transition>


    <transition
      enter-active-class="normal-in"
      leave-active-class="normal-out"
    >
      <normal-player v-if="showNormal" @closeHandle='showPalyer'/>
    </transition>
  </div>
</template>

<script>
import miniPlayer from './children/mini-player'
import normalPlayer from './children/normal-player'
export default {
    components:{
        miniPlayer,
        normalPlayer
    },
    data(){
        return{
            isShow:false,
            showNormal:true
        }
    },
    watch: {
        showNormal(newVal) {
        this.isShow = !newVal;
        },
    },
    methods:{
        showPalyer(){
            this.showNormal=!this.showNormal;
        },
    },
    
}
</script>

<style scoped>
.play {
  position: absolute;
  width: 100%;
  height: 0%;
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  left: 0;
  z-index: 1000;
}
@keyframes mini-in {
    0%{
        transform: translateY(100%);
    }
    100%{
        transform: translateY(0);
    }
}
@keyframes mini-out {
    0%{
        transform: translateY(0%);
    }
    100%{
        transform: translateY(100%);
    }
}
.mini-slide-in{
    animation: mini-in 300ms ease-in;
}
.mini-slide-out{
    animation: mini-out 300ms ease-out;
}

@keyframes normal-in {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
@keyframes normal-out {
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
.normal-in{
    animation: normal-in 300ms ease-in;
}
.normal-out{
    animation: normal-out 300ms ease-out;
}
</style>