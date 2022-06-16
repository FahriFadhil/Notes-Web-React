// Additional to Update Data in Local Storage

function createNoteObject({ title, content }) {
    return {
        id: +new Date(),
        title: title,
        content: content,
        createdAt: new Date().toISOString(),
        archived: false
    }
}

export { createNoteObject }