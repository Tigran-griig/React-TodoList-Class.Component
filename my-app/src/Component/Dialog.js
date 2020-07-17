import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from "prop-types";


class EditDialog extends Component {

    state={
        inputValue:this.props.item.name
    }



   handleUpdate=()=>{

       const {onSave, item}=this.props;
       const {inputValue}=this.state;
       onSave(item, inputValue)
    }

   onNewDate=(event)=>{

       this.setState({inputValue: event.target.value })


   }
   onClose=()=> {

       const {onClose} = this.props
           onClose();
   }

    render() {
        const{inputValue}=this.state
        return (
           <div>
            <Dialog open={true} onClose={this.onClose } aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Katarel popoxutyun::{inputValue} ?
                    </DialogContentText>
                    <TextField
                        autoFocus
                        onChange={this.onNewDate}
                        value={inputValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleUpdate} color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
           </div>
        );
    }

}
EditDialog.propTypes= {

    handleUpdate: PropTypes.func,
    onNewDate: PropTypes.func,
    onClose: PropTypes.func,


}

    export default EditDialog