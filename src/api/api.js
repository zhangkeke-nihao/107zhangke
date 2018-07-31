import axios from 'axios';
import * as ActionTypes from '../const/ActionType';


export function user_post( next ) { 
    next({
        type: ActionTypes.FETCH_GITHUB_USER_REQ
    });
    axios({
         method:"POST", 
         headers:{'Content-type':'application/x-www-form-urlencoded',}, 
         url:'http://xly-wkop.xiaoniangao.cn/getUserInfo', 
         data:{
             mid:1,
         }, 
    }).then(res => {
        console.log("data is here")
        console.log(res.data.data);
        console.log("data is here")
        next({
            type:ActionTypes.FETCH_GITHUB_USER_SUC,
            data: res.data.data
        });
    }).catch(function(error){
        console.log(error);
        next({
            type:ActionTypes.FETCH_GITHUB_USER_FAI
        })
    }); 
}


export function table_post( next ) { 
    next({
        type: ActionTypes.FETCH_GITHUB_TABLE_REQ
    });
    axios({
        method:"POST", 
        headers:{'Content-type':'application/x-www-form-urlencoded',}, 
        url:'http://xly-wkop.xiaoniangao.cn/getLessonInfo', 
        data:{
            mid:1,
        }, 
   }).then(res => {
       console.log("data is here")
       console.log(res.data.data);
       console.log("data is here")
       next({
        type: ActionTypes.FETCH_GITHUB_TABLE_SUC,
        data:res.data.data
    });
      
   }).catch(function(error){
       console.log(error);
       next({
        type:ActionTypes.FETCH_GITHUB_TABLE_FAI
    })
   }); 
}



