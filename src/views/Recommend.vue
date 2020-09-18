<template>
  <div class="page recommend">
    <scroll class="content">
    <bannerList :data='banner'/>
    <list :data='list' />
    </scroll>
  </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex';
import bannerList from '../components/recommend/banner'
import List from '../components/recommend/list'
export default {
  components:{
    bannerList,
    List
  },
  created(){
    this.$store.dispatch("recommend/requestBanner");
    this.$store.dispatch('recommend/requestList');
  },
  computed:{
    ...mapState({
      banner:(state)=>state.recommend.banner,
      list:(state)=>state.recommend.list
    })
  },
  methods:{

  },
  mounted(){
  }
  

}
</script>

<style lang="scss">
.content {
    width: 100%;
    height: 100%;
  }
</style>