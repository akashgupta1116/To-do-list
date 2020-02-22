import React, { Component } from 'react';
import {FaEdit} from 'react-icons/fa';
import {FaTrashAlt	} from 'react-icons/fa';



import './todolist.css'

class List extends Component {
    constructor(props){
        super(props)
        this.state={
            hideText:true,
            showInput:false,
            editTextElement:this.props.content
        }
    }
    

    editHandler=()=>{
        this.props.editElement();
    }
    
    deleteHandler=()=>{
        this.props.deleteList();
    }
    showInput=()=>{
        this.setState({
            hideText:false,
            showInput:true,
        })
    }
    editText=(event)=>{
        if(event.key=='Enter'&& this.state.editTextElement){
            this.props.editContent(this.state.editTextElement)
            this.setState({
                hideText:true,
                showInput:false
            })
        }
    }
    inputHandler=(event)=>{
        this.setState({
            editTextElement:event.target.value
        })
    }
    // editContent=()=>{
        // let newText=this.state.editTextElement
        
        
    // }
    
    
    render() {
        return this.props.index<=this.props.maxListLength?   (

             
            <div className = "list-template">
             {this.state.hideText ?   <p onClick={this.showInput} className="list-content" > {this.props.content} </p>:''} {this.state.showInput? <input className="edit-text-input" onChange={this.inputHandler} onKeyPress={this.editText} type="text" value={this.state.editTextElement} />:''}
                <div className="btn-div">
                    <button className="btns" onClick={this.editHandler}><FaEdit/>	</button>
                    <button className="btns" onClick={this.deleteHandler} ><FaTrashAlt/></button>
                </div>
            </div>
        ):null;

    }
}

export default List;