import { schema } from 'normalizr';


const author = new schema.Entity('author', {}, {
  idAttribute: 'mid'
});
const classes = new schema.Entity('classes',{},{
  idAttribute:'id'
})
const comments = new schema.Entity('comments',{},{
  idAttribute:'id'
})

const teacher = new schema.Entity('teacher',{},{
  idAttribute:'id'
})

const homeworkList = new schema.Entity('homeworkList',{
  classInfo:classes,
  comments:[comments],
  teacherInfo:teacher,
  author:author
},{
  idAttribute:'id'
})  
//中间的括号是扁平化的规则


export const HOMEWORKLIST = [ homeworkList ]; //要扁平化的数据最外层就是一个数组