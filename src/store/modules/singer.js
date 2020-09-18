import http from '../../api/http';
import { ARTISTS_API} from '../../api/url';
export default{
    namespaced:true,
    state:{
        list:[],
        loading:false
    },
    getters:{

    },
    mutations:{
        setList(state,payload){
           state.list=payload;
        //    console.log(state.list);
        },
        setLoading(state,payload){
            state.loading=payload;
            // console.log(payload);
        }
    },
    actions:{
       async requestSingers(context,payload){
           context.commit('setLoading',true);
        //    console.log(payload);
        const {data:{artists}}= await http.get(ARTISTS_API,payload); 
        // console.log(artists);
        context.commit('setList',artists);
        context.commit('setLoading',false);
    }
    }
}