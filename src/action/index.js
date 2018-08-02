import * as ActionTypes from '../const/ActionType';

export function fetchUserInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_USER_INFO,
      endpoint: '/getUserInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchLessonInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_LESSON_INFO,
      endpoint: '/getLessonInfo',
      params: {
        mid
      }
    }
  }
}

export function fetchStudentInfo(id) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_STUDENT_INFO,
        endpoint: '/getStudentList',
        params: {
          id
        }
      }
    }
}

export function fetchLearnInfo(id) {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LEARN_INFO,
        endpoint: '/getClassInfo',
        params: {
            id
        }
      }
    }
}

export function fetchSatisifyInfo(mid) {
  return {
    SERVER_API: {
      type: ActionTypes.FETCH_SATISIFY_INFO,
      endpoint: '/getSatisfiledList',
      params: {
          mid
      }
    }
  }
}


export function changeTableItem(value){
  return {
    type:ActionTypes.CHANGE_TABLE_ITEM,
    value,
  }
}










export function changeMailStatus(id){
  return {
    type:ActionTypes.CHANGE_MAIL_STAUS,
    id,
  }
}



