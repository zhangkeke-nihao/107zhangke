import React, { Component } from 'react';
import './Dialog.css'


export default class Dialog extends Component{
    getMaskClassName = () => {
        if(!this.props.isActive){
            return 'dailog-mask dailog-hideMask';
        }
        return 'dailog-mask dailog-showMask';
    }

    getMenuClassNameIos = () => {
        if(!this.props.isActive){
            return 'dailog-menu hideMenu';
        }
        return 'dailog-menu dailog-showMenu';
    }
 
    renderDialogContent = () => {
        const { type,content,title,menus,botword } = this.props;
        switch(type){
            case 'iOS1':{
                return  <div className={this.getMenuClassNameIos()}>
                        {
                            !title.length 
                            ? null 
                            : <div className="dailog-title" >{title}</div>
                        }
                        {
                            !content.length 
                            ? null 
                            : <div className="dailog-content dailog-divider" >{content}</div>
                        }
                        <div className="dailog-btn-wrap">
                        {
                            menus.map((item,idx) => {
                                return <div 
                                            className="dailog-btn dailog-btn-ios"
                                            key={`actionsheet_${idx}`} 
                                            onClick={this.props.onCancle}
                                        >
                                            {item.title}
                                        </div>
                            })
                        }
                        </div>
                    </div>
            }
            case 'iOS2':{
                return  <div className={this.getMenuClassNameIos()}>
                            {
                                !content.length 
                                ? null 
                                : <div className="dailog-content only-content dailog-divider" >{content}</div>
                            }
                            {
                                !botword.length 
                                ? null 
                                : <div className="dailog-bot" onClick={this.props.onCancle}>{botword}</div>
                            }
                        </div>
            }
            case  'Android1':{
                return  <div className={this.getMenuClassNameIos()}>
                        {
                            !title.length 
                            ? null 
                            : <div className="dailog-title title-andriod" >{title}</div>
                        }
                        {
                            !content.length 
                            ? null 
                            : <div className="dailog-content dailog-divider" >{content}</div>
                        }
                        <div className="dailog-btn-wrap dailog-btn-andriod">
                        {
                            menus.map((item,idx) => {
                                return <div 
                                            className="dailog-btn dailog-btn-ios"
                                            key={`actionsheet_${idx}`} 
                                            onClick={this.props.onCancle}
                                        >
                                            {item.title}
                                        </div>
                            })
                        }
                        </div>
                    </div>
            }
            case  'Android2':{
                console.log(1)
                return  <div className={this.getMenuClassNameIos()}>
                            {
                                !content.length 
                                ? null 
                                : <div className="dailog-content only-content dailog-divider" >{content}</div>
                            }
                            <div className="dailog-btn-wrap dailog-btn-andriod">
                            {
                                menus.map((item,idx) => {
                                    return <div 
                                                className="dailog-btn dailog-btn-ios"
                                                key={`actionsheet_${idx}`} 
                                                onClick={this.props.onCancle}
                                            >
                                                {item.title}
                                            </div>
                                })
                            }
                            </div>
                        </div>
            }
        }
    }
        


    render(){
        return (
            <div className="dialog-wrap">
                <div className={this.getMaskClassName()}></div>
                {this.renderDialogContent()}
            </div>
        );
    }
}

  