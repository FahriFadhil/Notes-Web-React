import React from 'react'
import Card from './Card'

export default class NotesList extends React.Component {

    render() {
        return (
            <div>
                <h2 className='sect-title'>All Of Your Notes</h2>
                <div className='notes-container'>
                    {   
                        // map through the unarchived notes array and create a card for each note
                        this.props.notes.filter((note) => !note.archived).length 
                        ? this.props.notes
                            .filter((note) => !note.archived)
                            .map((note, index) => {
                                return (
                                   <Card onArchiveEventHandler={this.props.onArchiveEventHandler} onDeleteEventHandler={this.props.onDeleteEventHandler} key={index} note={note} />
                                )
                            })
                        // show a message if there are no unarchived notes
                        : <p>You have no notes yet.</p>
                    }
                </div>
                <h2 className='sect-title'>Archived Notes</h2>
                <div className='notes-archived'>
                    {   
                        // map through the archived notes array and create a card for each note
                        this.props.notes
                            .filter((note) => note.archived).length 
                        ? this.props.notes
                            .filter((note) => note.archived)
                            .map((note, index) => {
                                return (
                                   <Card onArchiveEventHandler={this.props.onArchiveEventHandler} onDeleteEventHandler={this.props.onDeleteEventHandler} key={index} note={note} />
                                )
                            })
                        // show a message if there are no archived notes
                        : <p>You have no notes yet.</p>
                    }
                </div>
            </div>
        )
    }
}