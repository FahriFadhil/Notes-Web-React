import React from 'react'
import { createNoteObject } from '../utils/data';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            maxLetter: 50,
        }
    }

    onTitleChangedEventHandler(event) {
        this.setState({
            title: event.target.value,
            maxLetter: 50 - event.target.value.length
        })
    }

    onContentChangedEventHandler(event) {
        this.setState({
            content: event.target.value
        })
    }
    /**
     * Handle the submit event of the form
     * add notes to the parent component state
     * @param {SubmitEvent} event 
     */
    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.onAddNotesHandler(createNoteObject(this.state))
        this.setState({
            title: '',
            content: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler.bind(this)}>
                <h2>Add a Note</h2>
                <span>Letter Left : {this.state.maxLetter}</span>
                <input type="text"
                    placeholder="Note Title..."
                    maxLength={50}
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