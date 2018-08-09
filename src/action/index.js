import * as ActionTypes from '../const/ActionType';
import { normalize } from 'normalizr'
import * as schemes from '../schema/index'

export function fetchUnReviewInfo(initParams) {
    const {token,isReviewed} = initParams
    let type = '';
    console.log(token && !isReviewed)
    console.log(token && isReviewed)
    console.log(!token && !isReviewed)
    console.log(!token && isReviewed)
    if (token && !isReviewed) {
        type = ActionTypes.FETCH_HOMEWORK_UNREVIEW_INFO;
    } else if (token && isReviewed) {
        type = ActionTypes.FETCH_HOMEWORK_REVIEWED_INFO;
    } else if (!token && !isReviewed) {
        type = ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW_INFO;
    } else {
        type = ActionTypes.FETCH_HOMEWORK_ALLREVIEWED_INFO;
    }
    return {
      SERVER_API: {
        type,
        endpoint: '/getHomeWork',
        params: initParams,
        normailzerFun:response => normalize(response.data, schemes.HOMEWORKLIST)
      }
    }
  }



  // export function fetchUnReviewInfo(initParams) {
  //   return {
  //     SERVER_API: {
  //       type: ActionTypes.FETCH_HOMEWORK_UNREVIEW_INFO,
  //       endpoint: '/getHomeWork',
  //       params: initParams,
  //       normailzerFun:response => normalize(response.data, schemes.HOMEWORKLIST)
  //     }
  //   }
  // }

// export function fetchReviewedInfo(initParams) {
//   return {
//     SERVER_API: {
//       type: ActionTypes.FETCH_HOMEWORK_REVIEWED_INFO ,
//       endpoint: '/getHomeWork',
//       params: initParams,
//       normailzerFun:response => normalize(response.data, schemes.HOMEWORKLIST)
//     }
//   }
// }

// export function fetchAllUnReviewInfo(initParams) {
//   return {
//     SERVER_API: {
//       type: ActionTypes.FETCH_HOMEWORK_ALLUNREVIEW_INFO,
//       endpoint: '/getHomeWork',
//       params: initParams,
//       normailzerFun:response => normalize(response.data, schemes.HOMEWORKLIST)
//     }
//   }
// }

// export function fetchAllReviewedInfo(initParams) {
//   return {
//     SERVER_API: {
//       type: ActionTypes.FETCH_HOMEWORK_ALLREVIEWED_INFO,
//       endpoint: '/getHomeWork',
//       params: initParams,
//       normailzerFun:response => normalize(response.data, schemes.HOMEWORKLIST)
//     }
//   }
// }



export function ChangeHomeWorkStatus(id){
  return {
    type:ActionTypes.CHANGE_HOMEWORK_STAUS,
    id,
  }
}


export function FilterHomeworkItem(value){
  return {
    type:ActionTypes.FILTER_HOMEWORK_ITEM,
    value,
  }
}


export function ChangeRejectStatus(id){
  return {
    type:ActionTypes.CHANGE_REJECT_STATUS,
    id,
  }
}

export function sendReview(json,homeworkId){
  return {
    type:ActionTypes.SEND_REVIEW,
    json,
    homeworkId
  }
}




