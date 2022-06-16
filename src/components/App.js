import React from 'react';
import Nav from './Nav';
import Form from './Form';
import NotesList from './NotesList';
import { LocalStorageKey } from '../utils/constants';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: JSON.parse(localStorage.getItem(LocalStorageKey)) ?? [],
    }
  }

  onKeywordChangedEventListener(query) {
    this.setState({
      notes: JSON.parse(localStorage.getItem(LocalStorageKey)).filter(({ title, content }) => {
        return new RegExp(query, 'i').test(title) || new RegExp(query, 'i').test(content)
      })
    })
  }

  onAddNotesHandler(note) {
    this.setState(() => {
      const notes = [...this.state.notes, note]
      localStorage.setItem(LocalStorageKey, JSON.stringify(notes))
      return {
        notes
      }
    })
  }

  onDeleteEventHandler(note) {
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
      console.log(this.state.notes)
      const notes = this.state.notes.map((note) => {
        return noteId === note.id? { ...note, archived: !note.archived } : note
      })
      console.log(notes)
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