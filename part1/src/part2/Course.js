import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Header from './Header';
import Total from './Total';


const Course = ({ courses }) => {
    // console.log(courses.length);
    // courses.map(course => {console.log(course.name,course.id);})
    return (
        <div>
            <ul>
                {/* course内容，三个组件内容不显示 */}
                {courses.map(course => 
                    <li key={course.id}>
                        <Header header={course.name}></Header>
                        <Content parts={course.parts} ></Content>
                        <Total parts={course.parts}></Total>
                    </li>
                )}
            </ul>

        </div>
    )
}
export default Course