import React, { Component } from 'react';
import List from './List';
import {FaEdit} from 'react-icons/fa';
import './todolist.css'
class TodoList extends Component {
    constructor(){
        super()
        this.state={
            inputBox:'',
            listTemplate:[],
            isShowMore: false,
            allElements:true,
            maxListLength:2
            
        }

    }
    inputHandler=(event)=>{
        this.setState({
            inputBox:event.target.value
        })
    }
    addList=(event)=>{
        if(event.key=='Enter' && this.state.inputBox){
            this.addContent()
            this.setState({
                inputBox:''

            })
       
    } 
    }
    addContent=()=>{
        let inpuState=this.state.inputBox;
        let newlistTemplate=this.state.listTemplate;
        newlistTemplate.push(inpuState)
        // console.log(this.state.listTemplate)
        this.setState({
            listTemplate:newlistTemplate
        });
        this.checkShowMore()

    }
 checkShowMore = () => {
        if(this.state.listTemplate.length>=this.state.maxListLength+1){
            this.setState({
                isShowMore: true
            });
        } else {
            this.setState({
                isShowMore: false
            });
        }
    };
   


    deleteElement=(index)=>{
        let deleteList = this.state.listTemplate;
        deleteList.splice(index,1)
        this.setState({
            listTemplate:deleteList
        });
        this.checkShowMore();
    }
    editText=(index)=>{
       let newText =  prompt('Edit your List');
       if(newText){
       this.state.listTemplate[index]=newText;
       let newState=this.state.listTemplate
    //    console.log(newState)
       this.setState({
        listTemplate:newState
       });
    }
    }
    showAll=()=>{
        this.setState({
            isShowMore:false,
            maxListLength:this.state.listTemplate.length
        });
        // this.allElement();
    }
    // allElement=()=>{
    //     if(this.state.listTemplate.length<=2){
    //         this.setState({
    //             allElements:false
    //         })
    //     }
    //     else{
    //         this.setState({
    //             allElements:true
    //         })
    //     }
    // }
    editContent=(val,index)=>{
        // console.log(val)
        this.state.listTemplate[index]=val;
        let newState=this.state.listTemplate
        //    console.log(newState)
           this.setState({
            listTemplate:newState
           });


    }


    render() {
        return (
            <div>
                <div>
                    <input className = 'input-box' type = "text" value={this.state.inputBox}  onChange={this.inputHandler} onKeyPress={this.addList}/>
                </div>
                <div>
                    <p className='todos-no'>{this.state.listTemplate.length} Todos</p>
                </div>
                <div>
                    {this.state.listTemplate.map((template,index)=>{
                       return <List key={'ab'-index} content={template} editContent={(val)=>this.editContent(val,index)} index = {index} deleteList={()=>this.deleteElement(index)} allElements={this.state.allElements} editElement={()=>this.editText(index)} maxListLength={this.state.maxListLength}/>

                    })}
                </div>
                <div style={{marginTop:'20px'}}>
                {this.state.isShowMore? <a onClick={this.showAll}>Show More</a> : ''}
                </div>
            </div>
        );
    }
}

export default TodoList;