<template>
  <div class="author">
    <!-- <scroll class="wap"> -->
    <down-up class="content" ref="content" @pull-down='pullDown'>  
      <ul class="list" ref="list">
          <li v-for='item in data' :key='item.id' @click='singerAction(item)'>
              <img :src="item.picUrl">
              <span>{{item.name}}</span>
          </li>
      </ul>
      
    </down-up>     
    <!-- </scroll> -->
    
  </div>
</template>

<script>
import downUp from '../common/down-up'
export default {
    props:{
        data:Array,
        obj:Object,
        List:Array
    },
    components:{
        downUp
    },
    watch:{
        List(newVal){
            // console.log(newVal);
        }
    },
    methods:{
        singerAction(item){
            this.$router.push({name:'singerList',params:{id:item.id}});
        },
        pullDown(){
            this.$emit('hand');
        },
        pullScroll(){
            this.$refs.content.endPullDown();
        }
    },
    mounted(){
        
    }
    
}
</script>

<style lang='scss' scoped>
.author{
    width: 100%;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    .wap{
        width: 100%;
        height: 100%;
    }
    .list{
        width: 100%;
        li{
            width: 100%;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            margin: 0px 5px;
            padding: 5px 0px;
            border-bottom: 1px solid rgb(228, 228, 228);
            img{
                width: 50px;
                height: 50px;
                display: block;
                margin-right: 20px;
            }
            span{
                font-size: 14px;
                color: rgb(46, 48, 48);
                font-weight: 500;
            }
        }
    }
    
}
</style>