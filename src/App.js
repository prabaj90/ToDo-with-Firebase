import {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import firebase from 'firebase';
import ToDo from './Todo';
import db from './firebase';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => (
        {id:doc.id, todo: doc.data().todo, timestamp: (doc.data().timestamp && (((doc.data().timestamp).toDate()).toDateString())) })))
    })
  }, [])
  const addTodo = e =>{
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  } 
  return (
    <div className="App">
      <h1>ToDo App📓</h1>
      <FormControl>
        <InputLabel><BorderColorIcon/> Write a ToDo</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)} />
      </FormControl>
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
      Add ToDo
</Button>
      <ul>
        {todos.map(t => (
          <ToDo todo={t} />
        ))}
        </ul>
    </div>
  );
}

export default App;
