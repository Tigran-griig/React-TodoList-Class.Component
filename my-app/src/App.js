import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TodoList from "./Component/TodoList";
import { v4 as uuidv4 } from 'uuid'
import EditDialog from "./Component/Dialog";
import PropTypes from "prop-types";


class App extends Component{
  state = {
      inputValue:'',
      items:[],
    editItem:null,
  }

  onAddItem=()=>{
      debugger

      const {inputValue,items}=this.state
       this.setState({items:[...items,{name:inputValue,id:uuidv4()}] ,inputValue:''})
  }
    onInputChange=(event)=>{

        this.setState({inputValue:event.target.value})
    }

    onDeleteItem=(id)=>{
        debugger

        const {items}=this.state
       const newItems=items.filter((item)=>item.id!==id);
        this.setState({
            items:newItems
        })
    }
    onEditItem=(item)=>{

      this.setState({editItem:item})

    }
    renderElem=(elem,index)=>{

       return <TodoList key={elem.id+'_'+index} item={elem} onDelete={this.onDeleteItem} onEditing={this.onEditItem} />
    }

    onKeyDown=(event)=>{

      if(event.keyCode===13){
          this.onAddItem()
      }
    }
    updateItem=(currentItem, newName)=>{

      const editableItem = this.state.items.find(item => item.id === currentItem.id)
      editableItem.name = newName;
      this.onEditItem();
    }

    onEditClose=()=>{

        this.setState({editItem:null})
    }

    inputKey={
        onKeyDown:this.onKeyDown
    }

    render() {
      const {items,editItem}=this.state;
        return(
            <div className={"wraper"}>
                    <TextField
                        id="standard-basic"
                        label="Standard"
                        value={this.state.inputValue}
                        onChange={this.onInputChange}
                        InputProps={this.inputKey}
                    />
                    <Button onClick={this.onAddItem} >Add</Button>
                <div>
                    {items.map(this.renderElem) }
                    {editItem && <EditDialog item={editItem} onSave={this.updateItem} onClose={this.onEditClose}/>}
                </div>

            </div>
        )

    }
}


App.propTypes={
    updateItem:PropTypes.func,
    onDeleteItem:PropTypes.func,
    renderElem:PropTypes.func,
    onKeyDown:PropTypes.func,
    onEditClose:PropTypes.func,

}


export default App