<template>
  <div class="offic">
      <list-header :opacity="opacity"/>
      <scroll :handleScroll="handleScrollAction" class="scol">
        <list-top/>
        <song-list/>
      </scroll>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import listHeader from '../components/list/list-detail-header'
import listTop from '../components/list/list-detail-top'
import songList from '../components/list/song-list'
export default {
  components:{
    listHeader,
    listTop,
    songList
  },
  data(){
    return{
      opacity:1
    }
  },
  computed:{
    ...mapState({
      list:(state)=>state.offic.officList
    })
  },
  methods:{
    handleScrollAction({y}){
      if(y < 0 && y >= -200){
        let opacity = y * (-1) / 200;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacity = opacity;
      }
    }
  },
  created(){
    this.$store.dispatch('offic/requestOffic',this.$route.params.id);
  }
}
</script>

<style lang="scss">
.offic{
  width:100%;
  height:100%
  
}
.scol{
    width:100;
    height: 100%;
  }
</style>