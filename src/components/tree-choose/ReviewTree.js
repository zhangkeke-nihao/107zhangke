import React, { Component } from 'react';
import './tree.css'
import { Icon,Tree } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../action/index';

class ReviewTree extends Component{
  
    renderTreeItem = () => {
        const { reviewtreedata } = this.props;
        const TreeNode = Tree.TreeNode;
        console.log(reviewtreedata)
        // const loop  = reviewtreedata.child.map((item) => {
        //     if (item && item.length) {
        //       return <TreeNode key={item.id} title={item.name}>{loop(item)}</TreeNode>;
        //     }
        //     return <TreeNode key={item.id} title={item.name} />;
        //   });
        // return loop;
    }


    
    render(){
        const TreeNode = Tree.TreeNode;
        const { Actions } = this.props;
        return (
            <div>
                 <Tree
                    className="draggable-tree"
                    defaultExpandAll
                    onSelect={(selectedKeys) => Actions.gettreenodeid(selectedKeys)}
                >
                    {/* <TreeNode key={0} title={'所有部门'}>
                        <TreeNode key={1} title={'爱奇迪集团'}>
                            <TreeNode key={2} title={'广州分公司'}> */}
                                {this.renderTreeItem()}
                                {/* <TreeNode key={6} title={'产品研发部'}> */}
                                   
                                {/* </TreeNode>
                            </TreeNode>
                        </TreeNode>
                    </TreeNode> */}
                </Tree>
            </div>
        );
    }
}

  

function mapStateToProps(state){
    const { reviewtreedata } = state;
    const props = { reviewtreedata }; 
    return props;
  } 
  
  const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(actionCreators, dispatch),
  }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ReviewTree);
  
  
























// import React, { Component } from 'react';
// import './tree.css'
// import { Icon,Tree } from 'antd';

// export default class ReviewTree extends Component{
//     renderTreeItem = () => {
//         const { reviewtreedata } = this.props;
//         const TreeNode = Tree.TreeNode;
//         const loop  = reviewtreedata.data.all.firstbranch.secondbranch.thirdbranch.department.map((item) => {
//             if (item && item.length) {
//               return <TreeNode key={item.id} title={item.name}>{loop(item)}</TreeNode>;
//             }
//             return <TreeNode key={item.id} title={item.name} />;
//           });
//         return loop;
//     }

//     renderTreeItem1 = () => {
//         const { reviewtreedata } = this.props;
//         const TreeNode = Tree.TreeNode;
//         const loop  = reviewtreedata.data.all.firstbranch.secondbranch.thirdbranch.product.forthbranch.map((item) => {
//             if (item && item.length) {
//               return <TreeNode key={item.id} title={item.name}>{loop(item)}</TreeNode>;
//             }
//             return <TreeNode key={item.id} title={item.name} />;
//           });
//         return loop;
//     }
    
//     render(){
//         const TreeNode = Tree.TreeNode;
//         const { reviewtreedata } = this.props;

      

//         return (
//             <div>
//                  <Tree
//                     className="draggable-tree"
//                     defaultExpandedKeys={['0-0', '0-0-0', '0-0-0-0']}
//                     defaultExpandParent={"true"}
//                     draggable
//                     onDragEnter={this.onDragEnter}
//                     onDrop={this.onDrop}
//                 >
//                     <TreeNode key={0} title={reviewtreedata.data.all.name}>
//                         <TreeNode key={1} title={reviewtreedata.data.all.firstbranch.name}>
//                             <TreeNode key={2} title={reviewtreedata.data.all.firstbranch.secondbranch.name}>
//                                 {/* <TreeNode key={3} title={1-1-1} />
//                                 <TreeNode key={4} title={1-1-2} />
//                                 <TreeNode key={5} title={1-1-3} />
//                                  */}
//                                 {this.renderTreeItem()}
//                                 <TreeNode key={6} title={reviewtreedata.data.all.firstbranch.secondbranch.thirdbranch.product.name}>
//                                     {/* <TreeNode key={7} title={1-1-4-1} />
//                                     <TreeNode key={8} title={1-1-4-2} />
//                                     <TreeNode key={9} title={1-1-4-3} /> */}
//                                     {this.renderTreeItem1()}
//                                 </TreeNode>
//                             </TreeNode>
//                         </TreeNode>
//                     </TreeNode>
//                 </Tree>
//             </div>
//         );
//     }
// }

  