export const addNote = ({ dispatch }) => {
  dispatch('ADD_NOTE')
}

export const editNote = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}

//analogue to ES5
// export const addNote = function (store) {
//   var dispatch = store.dispatch
//   dispatch('ADD_NOTE')
// }