import React from 'react'
import { showFormattedDate } from "../data/notes";

export default class Card extends React.Component {

    render() {
        return (
            <div className='note-card'>
                <h3>{this.props.note.title}</h3>
                <span>{showFormattedDate(this.props.note.createdAt)}</span>
                <p>{this.props.note.body}</p>
                <div className='card-action'>
                    <button className='btn-act-del' onClick={() => this.props.onDeleteEventHandler(this.props.note)} >Delete</button>
                    <button className='btn-act-arch' onClick={() => this.props.onArchiveEventHandler(this.props.note)} >{this.props.note.archived? 'Unarchive' : 'Archive'}</button>
                </div>
            </div>
        )
    }
}
