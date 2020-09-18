<template>
    <div class="list">
      <h1>推荐歌单</h1>
      <div class="list-wrap">
          <div class="title" v-for='item in data' :key='item.id'>
              <div class="title-tab">
                  <span class="iconfont icon-headset"></span>
                  <span>{{item.playCount}}</span>
                </div>
              <img :src="item.picUrl">
              <p>{{item.name}}</p>
          </div>  
      </div>
    </div>
</template>

<script>
export default {
    props:{
        data:Array
    }
}
</script>

<style lang="scss" scoped>
.list{
    width: 100%;
    h1{
        height: 60px;
        line-height: 60px;
        box-sizing: border-box;
        padding-left: 6px;
        font-size: 14px;
        font-weight: 700;
    }
    .list-wrap{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        
        .title{
            width: 32%;
            box-sizing: border-box;
            position: relative;
            .title-tab{
                position: absolute;
                top: 4px;
                right: 5px;
                span{
                    color: #f1f2f3;
                }
            }
            img{
                width: 100%;
                border-radius: 6px;
            }
            p{
                overflow: hidden;
                margin-top: 2px;
                padding: 0px 2px;
                height: 50px;
                font-size: 12px;
            }
        }
    }
}
</style>