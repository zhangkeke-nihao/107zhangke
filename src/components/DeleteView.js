import React,{Component} from 'react';


export default class DeleteView extends Component{
    constructor(){
        super();

    }

    render(){
        const {deleArr} = this.props;
        const {onDeleteMultiple} = this.props;
        if(!Array.isArray(deleArr)){
            return null;
        }
        return (
            <div className="multipleDeleteBtn" onClick={onDeleteMultiple}>删除</div>
        )
    }
}