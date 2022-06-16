import React from 'react'

export default class NotesList extends React.Component {
  render() {
    return (
      <div>
        <h2 className='sect-title'>All Of Your Notes</h2>
        <div className='notes-container'>
            <Card title={"Notes Title"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, numquam reprehenderit ipsum eum earum ratione inventore, quo magni possimus facere provident itaque! Laboriosam laborum accusamus, numquam incidunt quae dignissimos pariatur.
            </Card>
        </div>
        <h2 className='sect-title'>Archived Notes</h2>
        <div className='notes-archived'>
            <Card title={"Notes Title"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, numquam reprehenderit ipsum eum earum ratione inventore, quo magni possimus facere provident itaque! Laboriosam laborum accusamus, numquam incidunt quae dignissimos pariatur.
            </Card>
        </div>
      </div>
    )
  }
}

function Card({ title, time = formattedTime(Date()), children }) {
    return (
        <div className='note-card'>
            <h3>{title}</h3>
            <span>{time}</span>
            <p>{children}</p>
            <div className='card-action'>
                <button className='btn-act-del'>Delete</button>
                <button className='btn-act-arch'>Archive</button>
            </div>
        </div>
    )
}

function formattedTime(str) {
    return str.substring(0, 16);
}