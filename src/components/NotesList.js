import React from 'react'
import Card from './Card'

const LocalStorageKey = 'NotesStorage';

export default class NotesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes : JSON.parse(localStorage.getItem(LocalStorageKey)) ?? []
        }
    }

    render() {
        return (
            <div>
                <h2 className='sect-title'>All Of Your Notes</h2>
                <div className='notes-container'>
                    {
                        localStorage.getItem(LocalStorageKey) 
                        ? JSON.parse(localStorage.getItem(LocalStorageKey)).map((note, index) => {
                            if (!note.archived) {
                                return (
                                   <Card key={index} title={note.title}>{note.content}</Card>
                                )
                            }
                        }) 
                        : <p>You have no notes yet.</p>
                    }
                </div>
                <h2 className='sect-title'>Archived Notes</h2>
                <div className='notes-archived'>
                    {
                        localStorage.getItem(LocalStorageKey) 
                        ? JSON.parse(localStorage.getItem(LocalStorageKey)).map((note, index) => {
                            if (note.archived) {
                                return (
                                   <Card key={index} title={note.title}>{note.content}</Card>
                                )
                            }
                        }) 
                        : <p>You have no notes yet.</p>
                    }
                </div>
            </div>
        )
    }
}