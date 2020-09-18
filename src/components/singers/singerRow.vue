<template>
    <div class="singer">
        <div class="group">
            <scrollRow>
                <span class="fen">分类(热门分类):</span>
                <span v-for='(item,index) in datalist' :key='index' :class="{active:text==item.name}" @click="datalistAction(item,index)" >{{item.name}}</span>
            </scrollRow>
        </div>
        <div class="initial">
            <scrollRow>
                <span class="fen">首字母:</span>
                <span v-for='item in list' :key='item.initial' :class="{active:intText==item.name}" @click="initialAction(item)">{{item.name}}</span>
            </scrollRow>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
             datalist:[
                {name:'华语男',type:1,area:7},
                {name:'华语女',type:2,area:7},
                {name:'华语组合',type:3,area:7},
                {name:'欧美男',type:1,area:96},
                {name:'欧美女',type:2,area:96},
                {name:'欧美组合',type:3,area:96},
                {name:'日本男',type:1,area:8},
                {name:'日本女',type:2,area:8},
                {name:'日本组合',type:3,area:8},
                {name:'韩国男',type:1,area:16},
                {name:'韩国女',type:2,area:16},
                {name:'韩国组合',type:3,area:16},
                {name:'其他男歌手',type:1,area:0},
                {name:'其他女歌手',type:2,area:0},
                {name:'其他组合',type:3,area:0}

            ],
            list:[],
            text:'',
            intText:''
        }
    },
    created(){
        for(var i=65;i<=90;i++){
            this.list.push({
                name:String.fromCharCode(i),
                initial:String.fromCharCode(i).toLowerCase()
            })
        }
        // this.$store.commit('singer/dataAction',this.datalist)
    },
    methods:{
        datalistAction(item){
            this.$emit('singAction',item.type,item.area);
            // console.log(cat);
            this.text=item.name;
        },
        initialAction(item){
            this.$emit('songAction',item.initial);
            // console.log(222);
            this.intText=item.name;
        }
    }
    
}
</script>

<style lang='scss' scoped>
.singer{
    box-sizing: border-box;
    position: absolute;
    top: 0;
    width: 100%;
    padding: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .group,.initial{
        display: flex;
        height: 30px;
        justify-items: center;
    }
    .fen{
        padding: 5px 0px;
        color: grey;
        font-size: 14px;
    }
    span{
        font-size: 14px;
        padding: 5px;
        line-height: 30px;
        box-sizing: border-box;
    }
}
.active{
    border: 1px solid lime;
    border-radius: 5px;
}
</style>