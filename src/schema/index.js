import { schema } from 'normalizr';


const child = new schema.Entity('child', {}, {
  idAttribute: 'mid'
});
const department = new schema.Entity('department', {
  child: [child]
}, {
  idAttribute: 'id'
});

const product = new schema.Entity('product', {
  child: [child]
}, {
  idAttribute: 'id'
});
// 中间的括号是扁平化的规则

const newList = new schema.Entity('newList', {
  department: [department],
  product: [product]
}, {
  idAttribute: 'id'
});

export default { newList }; // 要扁平化的数据最外层就是一个数组
