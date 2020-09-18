import http from '../../api/http';
import { TOP_LIST_DETAIL} from '../../api/url';
export default{
    namespaced:true,
    state:{
        list:[],
        imgs:[]
    },
    getters:{

    },
    mutations:{
        setList(state,payload){
          state.list = payload.filter((item,index)=> 
              index<4
          ),
          state.imgs = payload.filter((item,index)=> 
              index>=4
          )
        }
    },
    actions:{
       async requestOfficial(context){
           const {data:{list}}= await http.get(TOP_LIST_DETAIL); 
           const newData= list.map(({id,updateFrequency,coverImgUrl,tracks})=>({id,updateFrequency,coverImgUrl,tracks}));
        //    console.log(newData);
           context.commit('setList',newData);
           
       }
    }
}