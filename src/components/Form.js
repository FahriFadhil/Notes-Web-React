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
        this.setState(prevState => {
            return {
                ...prevState,
                title: event.target.value
            }
        })
    }

    onContentChangedEventHandler(event) {
        this.setState(prevState => {
            return {
                ...prevState,
                content: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        console.log(this.state);
        pushLocalStorage(this.state);
        this.setState({
            title: '',
            content: ''
        })
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

function createNoteObject(data) {
    return {
        id : new Date().getTime(),
        title: data.title,
        content: data.content,
        createdAt: new Date().toISOString(),
        archived: false
    }
}

function pushLocalStorage(data) {
    let notes = JSON.parse(localStorage.getItem(LocalStorageKey)) ?? [];
    notes.push(createNoteObject(data));
    localStorage.setItem(LocalStorageKey, JSON.stringify(notes));
}