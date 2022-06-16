import React from 'react'

const LocalStorageKey = 'NotesStorage';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    onDeleteEventHandler(event) {
        event.target.parentElement.parentElement.remove();
        localStorage.getItem(LocalStorageKey).findIndex(note => {
            // PR
        });
    }

    onArchiveEventHandler() {
        this.setState(prevState => {
            
        })
    }

    render() {
        return (
            <div className='note-card'>
                <h3>{this.props.title}</h3>
                <span>{this.props.time}</span>
                <p>{this.props.children}</p>
                <div className='card-action'>
                    <button className='btn-act-del' onClick={this.onDeleteEventHandler.bind(this)} >Delete</button>
                    <button className='btn-act-arch' onClick={this.onArchiveEventHandler.bind(this)} >Archive</button>
                </div>
            </div>
        )
    }
}
