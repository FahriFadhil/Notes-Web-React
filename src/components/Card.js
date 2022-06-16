import React from 'react'

export default class Card extends React.Component {

    render() {
        return (
            <div className='note-card'>
                <h3>{this.props.note.title}</h3>
                <span>{this.props.note.createdAt}</span>
                <p>{this.props.note.content}</p>
                <div className='card-action'>
                    <button className='btn-act-del' onClick={() => this.props.onDeleteEventHandler(this.props.note)} >Delete</button>
                    <button className='btn-act-arch' onClick={() => this.props.onArchiveEventHandler(this.props.note)} >Archive</button>
                </div>
            </div>
        )
    }
}
