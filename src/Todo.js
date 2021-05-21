import React, {useState} from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal  } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import db from './firebase';
import './ToDo.css';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");

    const handleOpen = () =>{
        setOpen(true);
    };
    const updateToDo = (e) =>{
        db.collection('todos').doc(props.todo.id).set({
            todo:input
        }, {merge: true});
        setOpen(false);
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
                >
                <div className={classes.paper}>
                    <h1>Modal</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <Button onClick = {updateToDo}> Update ToDo</Button>
                </div>
                </Modal>
            <List className="todo_list">
                <ListItem>
                    <ListItemAvatar >
                    </ListItemAvatar >
                    <ListItemText primary={props.todo.todo} secondary = {props.todo.timestamp} />
                    
                </ListItem>
                <Button onClick={e => setOpen(true)}><EditTwoToneIcon /></Button>
                <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}><DeleteForeverIcon /></Button>
            </List>
           
        </div>
    )
}

export default Todo
