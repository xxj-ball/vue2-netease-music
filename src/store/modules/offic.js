import http from '../../api/http';
import { PLAY_LIST_API} from '../../api/url';
export default{
    namespaced:true,
    state:{
        detail:[]
    },
    getters:{

    },
    mutations:{
        setList(state,payload){
            // console.log(payload);
            state.detail=payload;
            // console.log(state.detail.tracks);
        }
    },
    actions:{
       async requestOffic(context,payload){
           const {data:{playlist}}= await http.get(PLAY_LIST_API,{
               id:payload
           });
           const result = {subscribedCount: playlist.subscribedCount,coverImgUrl:playlist.coverImgUrl,name:playlist.name,
            creator: {
                nickname: playlist.creator.nickname,
                avatarUrl: playlist.creator.avatarUrl,
              },
            tracks:playlist.tracks.map((item)=>({
                id: item.id, //id
                title: item.name, //歌名
                ar: item.ar.map((arItem) => arItem.name), //歌手
                al: {
                    //专辑
                    name: item.al.name,
                    picUrl: item.al.picUrl,
                }
            }))};
            // console.log(result);
            
           context.commit('setList',result);
           
       }
    }
}