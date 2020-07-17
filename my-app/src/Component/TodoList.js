import React,{Component} from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import PropTypes from "prop-types";

class TodoList extends Component {
    state={
        showModal:false


    }

    onDeleteItem=()=>{
        this.setState({showModal:true})
    }
    handleClose=()=>{

        this.setState({showModal:false})

    }
    onEdit=()=>{

        const{onEditing,item}=this.props
        onEditing(item)

    }
    handleRemove=()=> {

        const {onDelete, item: {id}} = this.props
            onDelete(id);
            this.handleClose();
    }
        render() {
            const {item} = this.props
            const {showModal} = this.state
            return (
                <div>
                    <div>
                        <Button variant="contained" color="primary" onClick={this.onEdit}>Edit</Button>
                        <span> {item.name}</span>
                        <IconButton aria-label="delete" onClick={this.onDeleteItem}><DeleteIcon/></IconButton>
                    </div>
                    <Dialog
                        open={showModal}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Remove : {item.name} ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleRemove} color="primary" autoFocus>
                                Remove
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
        }

}
TodoList.propTypes = {
    showModal:PropTypes.bool,
    onDeleteItem:PropTypes.func,
    handleClose:PropTypes.func,
    onEdit:PropTypes.func,
    handleRemove:PropTypes.func,

}

export default TodoList