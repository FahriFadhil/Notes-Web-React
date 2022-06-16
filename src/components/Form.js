import React from 'react'

const LocalStorageKey = 'NotesStorage';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
        }
    }

    onTitleChangedEventHandler(event) {
        this.setState({
            title: event.target.value
        })
    }

    onContentChangedEventHandler(event) {
        this.setState({
            content: event.target.value
        })
    }
    /**
     * 
     * @param {SubmitEvent} event 
     */
    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.onAddNotesHandler(createNoteObject(this.state))
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler.bind(this)}>
                <h2>Add a Note</h2>
                <input type="text"
                    placeholder="Note Title..."
                    maxLength={75}
                    required={true}
                    value={this.state.title}
                    onChange={this.onTitleChangedEventHandler.bind(this)} />
                <textarea placeholder="..."
                    required={true}
                    value={this.state.content}
                    onChange={this.onContentChangedEventHandler.bind(this)} >
                </textarea>
                <button type="submit">Add Note</button>
            </form>
        )
    }
}

// Additional to Update Data in Local Storage

function createNoteObject({ title, content }) {
    console.log(+new Date())
    return {
        id: +new Date(),
        title: title,
        content: content,
        createdAt: new Date().toISOString(),
        archived: false
    }
}

function pushLocalStorage(data) {
    let notes = JSON.parse(localStorage.getItem(LocalStorageKey)) ?? [];
    notes.push(createNoteObject(data));
    localStorage.setItem(LocalStorageKey, JSON.stringify(notes));
}