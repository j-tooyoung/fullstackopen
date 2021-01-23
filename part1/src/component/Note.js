import React, { useState } from 'react';
import ReactDOM from 'react-dom';


// const Note = (props) => {
//     const { notes } = props
//     console.log(notes.length);
//     const res = notes.map(note => note.id)
//     console.log(res);
//     // for (let index = 0; index < notes.length; index++) {
//     //     console.log(notes[index].content);
//     // }
//     return (
//         <div>
//             <h1>notes</h1>
//             <ul>
//                 {notes.map(note => {
//                     <li key={note.id}>
//                         {note.content}
//                     </li>
//                 })}
//             </ul>
//         </div>

//     )
// }

const Note =({note}) =>{
    // console.log(note.content);
    return (
        <li>{note.content}</li>
    )
}
export default Note
