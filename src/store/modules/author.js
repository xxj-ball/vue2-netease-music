import http from '../../api/http';
import { ARTISTS_SINGER_API} from '../../api/url';
export default{
    namespaced:true,
    state:{
        singerList:[],
        singerObj:{}
    },
    getters:{

    },
    mutations:{
        setList(state,payload){
            state.singerList=payload;
            // console.log(state.singerList);
        },
        setObj(state,payload){
            state.singerObj=payload;
            // console.log(state.singerObj);
        }
    },
    actions:{
       async singerAction(context,payload){
           let {data:{artist,hotSongs}}= await http.get(ARTISTS_SINGER_API,{
                id:payload
           }); 
        // console.log(artist);
        //    console.log(hotSongs);
           let aritistList={picUrl:artist.picUrl,name:artist.name};
        //    console.log(aritistList);
           let hotSongsList=hotSongs.map(({id,name,al})=>({id,name,al}));
        //    console.log(hotSongsList);
           context.commit('setList',hotSongsList);
           context.commit('setObj',aritistList);
       }
    }
}