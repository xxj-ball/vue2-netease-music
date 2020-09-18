<template>
<div class="third">
  <div class="official">
      <h1>官方榜</h1>
      <div class="content">
          <ul class="list">
              <li v-for='item in data' :key=item.id class="offic" @click='officialAction(item)'>
                  <div class="left">
                      <img :src="item.coverImgUrl">
                      <span>{{item.updateFrequency}}</span>
                  </div>
                  <div class="right">
                      <span v-for='(title,index) in item.tracks' :key='index'>{{index+1}}.{{title.first}}-{{title.second}}</span>
                  </div>
              </li>
          </ul>
      </div>
      <!-- <router-view/> -->
  </div>
  <div class="global">
      <h1>全球榜</h1>
      <ul class="lis">
          <li v-for='item in global' :key='item.id'>
              <img :src="item.coverImgUrl" />
              <span>{{item.updateFrequency}}</span>
          </li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
    props:{
        data:Array,
        global:Array
    },
    methods:{
        officialAction(item){
            this.$router.push({name:'offic',params:{id:item.id}});
            
        }
    }
}
</script>

<style acoped lang='scss'>
.official{
    width: 100%;
    box-sizing: border-box;
    h1{
        margin: 10px 5px;
        padding-top: 15px;
        font-weight: 700;
        font-size: 14px;
    }
    .list{
        box-sizing: border-box;
        width: 100%;
        margin-top: 10px;
        padding: 0 5px;
        .offic{
            display: flex;
            padding: 3px 0px;
            border-bottom: 1px solid rgb(228, 228, 228);
            // justify-content: space-between;
            .left{
                width: 100px;
                position: relative;
                img{
                    width: 100%;
                    display: block;
                }
                span{
                    position: absolute;
                    left: 7px;
                    bottom: 7px;
                    font-size: 10px;
                    color: rgb(241, 241, 241);
                }            
            }
            .right{
                display: flex;
                flex-direction: column;
                text-align: left;
                justify-content: space-around;
                padding: 10px;
                span{
                    font-size: 12px;
                    color: grey;
                }
            }
        }
    }
}
</style>
<style lang="scss" scoped>
.global{
    width: 100%;
    h1{
        margin: 10px 5px;
        padding-top: 15px;
        font-weight: 700;
        font-size: 14px;
        
    }
    .lis{
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        padding: 0px 5px;
        justify-content: space-around;
        li{
            width: 120px;
            padding: 3px 0px;
            border-bottom: 1px solid rgb(228, 228, 228);
            // text-align: left;
            position: relative;
            img{
                width: 100%;
                display: block;
            }
            span{
                position: absolute;
                left: 7px;
                bottom: 7px;
                font-size: 10px;
                color: rgb(241, 241, 241);
            }
        }
    }
}
</style>