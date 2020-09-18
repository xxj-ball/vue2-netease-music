<template>
  <div class="progressWrap" ref="progress">
      <div class="progressBar" ref="progressBar" :style="{width: 100 * value +'%'}"></div>
      <div class="bar" ref="bar" @touchstart="touchstartAction"></div>
      <div></div>
  </div>
</template>

<script>
export default {
    props:{
        value:Number
    },
    data(){
        return{
            barWidth:0
        }
    },
    methods:{
        touchstartAction(ev){
           document.ontouchmove = this.touchmoveAction;
           document.ontouchend = this.touchEndAction;
           document.ontouchcancel = this.touchEndAction;

           let position = this.value * this.barWidth;
           this.startX=ev.changedTouches[0].clientX - position;
        },
        touchmoveAction(ev){
            const currentX = ev.changedTouches[0].clientX;
            let tmp = currentX - this.startX;
            if(tmp<0 ||tmp>this.barWidth){
                return;
            }
            this.offsetX=tmp;
            this.$refs.bar.style.transform = `translateY(-50%) translateX(${this.offsetX}px)`;
            this.$refs.progressBar.style.width = this.offsetX + 'px';

        },
        touchEndAction(){
            const newValue = this.offsetX / this.barWidth;
            this.$emit('input', newValue);
        },

    },
    mounted(){
        this.barWidth=this.$refs.progress.offsetWidth;
        this.$refs.bar.style.transform = `translateY(-50%) translateX(${this.value * this.barWidth}px)`;
    }
}
</script>

<style lang="scss" scoped>
.progressWrap{
    box-sizing: border-box;
    width: 60%;
    height: 4px;
    background: rgba(0,0,0,0.6);
    position: relative;
    .progressBar{
        height: 100%;
    }
    .bar{
        position: absolute;
        top: 50%;
        left: -20PX;
        transform: translateY(-50%);
        width: 40PX;
        height: 40PX;
        box-sizing: border-box;
        border: 8PX solid #fff;
        border-radius: 50%;
        background: lightcoral;
    }
}
</style>