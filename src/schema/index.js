import { schema } from 'normalizr';


const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers',{},{
  idAttribute:'id'
})

const satisfiled = new schema.Entity('satisfiled',{
  class_info:classes,
  teacher_info:teacher
},{
  idAttribute:'time'
})

const currentLessonsList = new schema.Entity('currentLessonsList',{
  classInfo:classes,
  teacherInfo:teacher
},{
  idAttribute:'id'
})
const historyLessonsList = new schema.Entity('historyLessonsList',{
  classInfo:classes,
  teacherInfo:teacher
},{
  idAttribute:'id'
})

export const CURRENTLESSONLIST = [ currentLessonsList ];
export const HISTORYLESSONLIST = [ historyLessonsList ];

export const SATISFILEDLIST = [ satisfiled ];