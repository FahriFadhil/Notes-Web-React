import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
            <h2>Add a Note</h2>
            <input type="text" placeholder="Note Title..." />
            <textarea placeholder="..."></textarea>
            <button type="submit">Add Note</button>
      </form>
    )
  }
}
