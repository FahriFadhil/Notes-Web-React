import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <h2>Add a Note</h2>
                <input type="text" placeholder="Note Title..." maxLength={75} />
                <textarea placeholder="..."></textarea>
                <button type="submit">Add Note</button>
            </form>
        )
    }
}
