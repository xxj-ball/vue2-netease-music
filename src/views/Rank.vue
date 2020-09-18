<template>
<div >
  <router-view class="route"/>
  <div class="page">
    <scroll class="rank">
      <Official :data='list' :global='imgs'/>
    </scroll>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import Official from '../components/rank/official'
export default {
  components:{
    Official
  },
  computed:{
      ...mapState({
        list:(state)=>state.rank.list,
        imgs:(state)=>state.rank.imgs
      }),
  },
  created(){
    this.$store.dispatch("rank/requestOfficial");
  },
  watch:{
    list(newVal){
      // console.log(newVal);
    }
  }
}
</script>

<style lang="scss" scoped>
.rank{
  width: 100%;
  height: 100%;
  background: rgb(242, 243, 244);
}
.page{
  width: 100%;
  position: absolute;
  left: 0;
  top: 94px;
  bottom: 0;
}
.route{
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 150;
}
</style>