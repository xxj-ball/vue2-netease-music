<template>
<div>
<div >
  <router-view class="rout"/>
  <div class="page">
      <singer @singAction='finish' @songAction='updata' />
      
      <author :data='singerList' @compent='authorAction' :obj='singerObj' :List='list' @hand='handlePullDown' ref="scroll"/>
     
  </div>
  </div>
</div>
</template>

<script>
import singer from '../components/singers/singerRow'
import author from '../components/singers/author'
import {mapState} from 'vuex'
export default {
  components:{
    singer,
    author
  },
  data(){
    return{
      singersList:{
        type:-1,
        area:-1,
        initial:'',
        offset:0,
        limit:30
      },
      id:0,
      show:false
    }
  },
  created(){
    this.requestData();
    // console.log(this.singersList);
  },
  computed:{
    ...mapState({
      singerList:(state)=>state.singer.list,
      list:(state)=>state.author.singerList,
      singerObj:(state)=>state.author.singerObj,
      loading:(state)=>state.singer.loading
    }),
    
    
    
  },
  methods:{
    finish(type,area){
      this.singersList.type=type;
      this.singersList.area=area;
      // console.log(this.singersList);
    },
    updata(initial){
      this.singersList.initial=initial;
    },
    authorAction(id){
      this.id=id;
    },
    requestData(isMore){
       this.singersList.offset = isMore ? this.singerList.length : 0;
        this.$store.dispatch('singer/requestSingers',this.singersList);
        const unwatch = this.$watch("loading", (newVal) => {
          if (!newVal) {
            if(isMore === false){
              //下拉刷新的请求
              // 关闭下拉刷新的效果
              this.$refs.scroll.pullScroll();
            }
            unwatch();
          }
          
        });

    },
     



    // offset = isLoadMore ? this.data.length : 0;
    //下拉刷新
    handlePullDown(){
      this.requestData(false);
    }
  },
  watch:{
    singersList:{
      handler(){
      this.requestData();
      // console.log(222);
      },
      deep:true
    },
    

  },
  mounted(){
  }
}
</script>

<style>
.rout{
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  background: #fff;
}
.page{
  width: 100%;
  position: absolute;
  left: 0;
  top: 94px;
  bottom: 0;
}
.sig{
  width: 100%;
  position: absolute;
  left: 0;
  top:0;
  bottom: 0;
  z-index: 100;
}
.active{
  z-index: 200;
}
</style>