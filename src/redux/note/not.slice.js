import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        filter: ''
    },
    reducers:{
        addNew: {
            reducer: (state, action) => {
                state.items.push(action.payload);
            },
            prepare: ({ text, color }) => {
                return {
                    payload: {
                        id: nanoid(),
                        color,
                        text
                    }
                }
            }
        },
        filter: (state, action) => {
            state.filter = action.payload;
        }
    },
})


// Constant variables
export const notes = (state) => state.notes.items;
export const activeFilter = (state) => state.notes.filter;
export const filteredItems = (state) => {
    if (state.notes.filter === '') {
        return state.notes.items
    }

    return state.notes.items.filter((item) => item.text.toLowerCase().includes(state.notes.filter.toLowerCase()));
}

// Export reducers
export const { addNew, filter } = notesSlice.actions;
export default notesSlice.reducer;