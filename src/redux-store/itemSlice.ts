import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: 'todos',
    initialState: [
        {id: 1, title: 'Item 1', selectedColor: null, completed: true},
        {id: 2, title: 'Item 2', selectedColor: '#fea889', completed: true},
        {id: 3, title: 'Item 3', selectedColor: null, completed: false}
    ],
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: Date.now(),
                title: action.payload.title,
                selectedColor: action.payload.selectedColor,
                completed: action.payload.completed
            };
            state.push(newItem);
        },
        checkComplete: (state, action) => {
            const index = state.findIndex(
                (item) => item.id === action.payload.id);
                state[index].completed = action.payload.completed;
        },
        deleteItem: ( state, action ) => {
            return state.filter(item => item.id !== action.payload.id)
        }
    }
});

export const { addItem, checkComplete, deleteItem } = itemSlice.actions;

export default itemSlice.reducer;