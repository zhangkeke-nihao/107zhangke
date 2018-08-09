import React, { Component } from 'react';
import './ActionSheet.css'


export default class ActionSheet extends Component{
    
    getMaskClassName = () => {
        if(!this.props.isActive){
            return 'mask hideMask';
        }
        return 'mask showMask';
    }

    getMenuClassNameIos = () => {
        if(this.props.type == 'iOS'){
            if(!this.props.isActive){
                return 'menu';
            }
            return 'menu showMenu';
        }
        if(this.props.type == 'Andriod'){
            if(!this.props.isActive){
                return 'menu';
            }
            return 'menuAndriod showMenu';
        }
        
    }
 

    handleMenuItem = idx => {
        const {menus,onCancle} = this.props;
        menus[idx].click && menus[idx].click(idx);
        onCancle();
    }


    renderActionSheetContent = () => {
        const { type,title,menus } = this.props;
        console.log(type);
        if(type === 'iOS'){
            return  <div className={this.getMenuClassNameIos()}>
                        {
                            !title.length 
                            ? null 
                            : <div className="title divider" >{title}</div>
                        }
                        {
                            menus.map((item,idx) => {
                                return <div 
                                            className="btn btn-ios divider"
                                            key={`actionsheet_${idx}`} 
                                            onClick={() => this.handleMenuItem(idx)}
                                        >
                                            {item.title}
                                        </div>
                            })
                        }
                        <div className="btn-concle" onClick={this.props.onCancle}>取消</div>
                    </div>
        }
        else if(type === 'Andriod'){
            return  <div className={this.getMenuClassNameIos()}>
                        {
                            menus.map((item,idx) => {
                                return <div 
                                            className="btn btn-andriod divider"
                                            key={`actionsheet_${idx}`} 
                                            onClick={() => this.handleMenuItem(idx)}
                                        >
                                            {item.title}
                                        </div>
                            })
                        }
                    </div>
        }
    }

    render(){
        return (
            <div className="actionsheet-wrap">
                <div className={this.getMaskClassName()} onClick={this.props.onCancle}></div>
                {this.renderActionSheetContent()}
            </div>
        );
    }
}

  