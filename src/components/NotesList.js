import React from 'react'
import Card from './Card'

export default class NotesList extends React.Component {

    render() {
        return (
            <div>
                <h2 className='sect-title'>All Of Your Notes</h2>
                <div className='notes-container'>
                    {
                        this.props.notes.filter((note) => !note.archived).length 
                        ? this.props.notes
                            .filter((note) => !note.archived)
                            .map((note, index) => {
                                return (
                                   <Card onArchiveEventHandler={this.props.onArchiveEventHandler} onDeleteEventHandler={this.props.onDeleteEventHandler} key={index} note={note} />
                                )
                            })
                        : <p>You have no notes yet.</p>
                    }
                </div>
                <h2 className='sect-title'>Archived Notes</h2>
                <div className='notes-archived'>
                    {
                        this.props.notes
                            .filter((note) => note.archived).length 
                        ? this.props.notes
                            .filter((note) => note.archived)
                            .map((note, index) => {
                                return (
                                   <Card onArchiveEventHandler={this.props.onArchiveEventHandler} onDeleteEventHandler={this.props.onDeleteEventHandler} key={index} note={note} />
                                )
                            })
                        : <p>You have no notes yet.</p>
                    }
                </div>
            </div>
        )
    }
}