// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FeedBack from './FeedBack';
import Note from './component/Note';
import Course from './part2/Course';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// const Display =(props) =>{
//   return (
//     <div>{props.counter} </div>
//   )
// }
// 这意味着我们可以使用解构简化组件，如下所示:
// const Display =({counter}) =>{
//   return (
//     <div>{counter} </div>
//   )
// }

const Display = ({ counter }) => <div>{counter} </div>


// const Button = (props) => {
//   return (
//     <button onClick={props.handleClick}>{props.text}</button>
//   )
// }

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>


// const App = () => {
//   const [counter, setCounter] = useState(0)

//   // setTimeout(() => setCounter(counter + 1), 1000)
//   console.log("rendering...", counter);

//   // const handleClick = () => { console.log('clicked'); }
//   const increaseByOne = () => setCounter(counter + 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       {/* <div> {counter}</div> */}
//       <Display counter={counter}></Display>
//       <Button handleClick={increaseByOne} text="plus"></Button>
//       <Button handleClick={setToZero} text="zero"></Button>
//       {/* <button onClick={() => setCounter(counter + 1)}>plus</button> */}
//       {/* <button onClick={increaseByOne}>plus</button> */}
//       {/* <button onClick={() => setCounter(0)}>zero</button> */}
//       {/* <button onClick={setToZero}>zero</button> */}
//     </div>
//   )
// }

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press History : {props.allClicks.join(' ')}
    </div>
  )
}



// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })
//   const [allClicks, setAll] = useState([])

//   // const handleLeftClick = ()=>{
//   //     const newClicks = {
//   //       left: clicks.left+1,
//   //       right: clicks.right
//   //     }
//   //     setClicks(newClicks)
//   // }
//   // 简化写法

//   const handleLeftClick = () => {
//     // 等价写法 ...展开语法
//     // const newClicks ={
//     //   ...clicks,
//     //   left: clicks.left+1
//     // }
//     // setClicks(newClicks)
//     setClicks({ ...clicks, left: clicks.left + 1 })
//     setAll(allClicks.concat('L'))
//   }

//   const handlerRightClick = () => {
//     const newClicks = {
//       left: clicks.left,
//       right: clicks.right + 1
//     }
//     setClicks(newClicks)
//     setAll(allClicks.concat('R'))

//   }

//   const hello =(who) => {
//     return () => console.log('hello', who);
//   } 


//   return (
//     <div>
//       {/* {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handlerRightClick}>right</button>

//       {clicks.right}
//       {/* <p>{allClicks.join(' ')}</p>  */}
//       <History allClicks={allClicks}></History>

//       <button onClick={hello('too1')}>hello</button>
//       <button onClick={hello('too2')}>hello</button>
//       <button onClick={hello('too3')}>hello</button> */}
//       <FeedBack  anecdotes={anecdotes} />
//       <Note notes={notes} />

//     </div>
//   )
// }

// const App =({notes}) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => <Note key={note.id} note={note}></Note>)}
//       </ul>
//     </div>
//   )
// }

// https://fullstackopen.com/zh/part2/%E4%BB%8E%E6%B8%B2%E6%9F%93%E9%9B%86%E5%90%88%E5%88%B0%E6%A8%A1%E5%9D%97%E5%AD%A6%E4%B9%A0
// part2 exercies 2.1-2.5
const App = ({ courses }) => {
  return (<Course courses={courses}></Course>)
}

// part2 exercies 2.6-2.10
// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState('a new note...')
//   const [showAll, setShowAll] = useState(true)
//   const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

//   const addNote = (event) => {
//     //     event 参数是触发对事件处理函数需要调用的event :
//     // 事件处理立即调用 event.preventDefault() 方法，它会阻止提交表单的默认操作。 因为默认操作会导致页面重新加载。
//     // 将event.target 中存储的事件的记录到控制台。

//     event.preventDefault()
//     console.log('button clicked', event.target);
//     const newObj = {
//       content: newNote,
//       date: new Date().toISOString(),
//       important: Math.random() < 0.5,
//       id: notes.length + 1
//     }
//     setNotes(notes.concat(newObj))
//     setNewNote('')
//   }
//   const handleNoteCHange = (event) => {
//     console.log(event.target.value);
//     setNewNote(event.target.value)
//   }
//   // console.log(notes.length);
//   // notes.map(note => console.log(note.content))
//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>show {showAll ? 'important' :'all'}</button>
//       </div>
//       <ul>
//         {notesToShow.map(note => 
//           <Note key={note.id} note={note} />
//         )}
//         {/* 加括号不显示内容 why??? */}
//          {/* {notesToShow.map(note => {
//           <Note key={note.id} note={note} />
//          })} */}
//       </ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteCHange}></input>
//         <button type='submit'>save</button>
//       </form>

//     </div>
//   )

// }

export default App;
