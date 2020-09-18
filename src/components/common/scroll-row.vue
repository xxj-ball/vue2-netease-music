<template>
  <div class="scroll-wrap" ref="wrap">
      <div class="scroll">
          <slot/>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        const scroll=new IScroll(this.$refs.wrap,{
            tap: true,
            click: true,
            probeType: 3,
            scrollX:true,
            scrollY:false
        });
        scroll.on('beforeScrollStart', ()=>{
        scroll.refresh();
        });
    }
}
</script>

<style scoped lang="scss">
.scroll-wrap{
    overflow: hidden;
    .scroll{
        width: max-content;
    }
}

</style>