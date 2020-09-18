import { BANNER_API,RECOMMEND_LIST_API} from '../../api/url'
import http from '../../api/http'
export default{
    namespaced:true,
    state:{
        banner:[],
        list:[]
    },
    getters:{

    },
    mutations:{
        setBanner(state,payload){
            state.banner=payload;
        },
        setList(state,payload){
            state.list=payload;
            // console.log(state.list);
        }
    },
    actions:{
       async requestBanner(context){
           let {data:{banners}}= await http.get(BANNER_API);
           let newData = banners.map(item=>item.imageUrl);
           context.commit('setBanner',newData);
       }, 
    
    
        async requestList(context){
            let {data:{result}}= await http.get(RECOMMEND_LIST_API);
            let new_Data = result.map(({id,name,picUrl,playCount})=>({id,name,picUrl,playCount}));
            context.commit('setList',new_Data);
        } 
    } 
}