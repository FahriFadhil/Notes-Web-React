import React from 'react';
import Nav from './Nav';
import Form from './Form';
import NotesList from './NotesList';
import { getInitialData } from '../data/notes';
import { LocalStorageKey } from '../utils/constants';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    // Initialize the state with the notes from localStorage if it exists
    // otherwise initialize it with the data from the json file
    this.state = {
      notes: JSON.parse(localStorage.getItem(LocalStorageKey)) ?? localStorage.setItem(LocalStorageKey, JSON.stringify(getInitialData())),
    }
  }

  onKeywordChangedEventListener(query) {
    // reload data from local storage and filter it by the query
    this.setState({
      notes: JSON.parse(localStorage.getItem(LocalStorageKey)).filter(({ title, content }) => {
        return new RegExp(query, 'i').test(title) || new RegExp(query, 'i').test(content)
      })
    })
  }

  onAddNotesHandler(note) {
    // Add the note to the state
    this.setState(() => {
      const notes = [...this.state.notes, note]
      localStorage.setItem(LocalStorageKey, JSON.stringify(notes))
      return {
        notes
      }
    })
  }

  onDeleteEventHandler(note) {
    // Delete the note from the state by filtering out the note by id
    this.setState(() => {
      const notes = this.state.notes.filter(({id: noteId}) => noteId !== note.id)
      localStorage.setItem(LocalStorageKey, JSON.stringify(notes))
      return {
        notes
      }
    })
  }

  onArchiveEventHandler({id: noteId}) {
    this.setState(() => {
      // map the notes to a new array with the archived note
      const notes = this.state.notes.map((note) => {
        return noteId === note.id? { ...note, archived: !note.archived } : note
      })
      localStorage.setItem(LocalStorageKey, JSON.stringify(notes))
      return {
        notes
      }
    })
  }

  render() {
    return (
      <>
        <Nav onKeywordChangedEventListener={this.onKeywordChangedEventListener.bind(this)} />
        <Form onAddNotesHandler={this.onAddNotesHandler.bind(this)} />
        <NotesList onArchiveEventHandler={this.onArchiveEventHandler.bind(this)} onDeleteEventHandler={this.onDeleteEventHandler.bind(this)} notes={this.state.notes} />
      </>
    );
  }

}
//searchedNotes={this.state.searchedNotes}