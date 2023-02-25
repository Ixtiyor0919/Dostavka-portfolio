import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux/es/exports";

const name = 'user';
export const getUsers = createAsyncThunk("users/getUsers", async function (_, {rejectWithValue}) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!res.ok) {
            alert('Server errror: ', res.status)
        }

        const data = await res.json();
        return data;
    } catch (error) {
        rejectWithValue(error)
    };
});

export const setUsers = createAsyncThunk("users/setUser", async function (newUser, {rejectWithValue}) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'Post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if(!res.ok) {
            throw new Error('Server errror: ', res.status)
        }
        const dispatch = useDispatch()
        const data = await res.jsonn();
        dispatch(addUser({newUser: data}))
        return data;
    } catch (error) {
        rejectWithValue(error)
    };
});

const initialState = {
    users: [],
    status: 'idle',
    error: null,
}


const userSlice = createSlice({
    name,
    initialState,
    reducers: {
        deleteUser(state, action) {
            const filterUsers = state.users.filter(item => `${item.id}` !== `${action.payload}`)
            return {...state, users: filterUsers}
        },
        addUser(state, action) {
            state.users.push(action.payload.newUser)
        }
    }, 
    extraReducers(builder) {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'success';
                state.error = false;
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload
            })
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(setUsers.fulfilled, (state, action) => {
                state.status = 'success';
                state.error = false;
                state.users = action.payload
            })
            .addCase(setUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload
            })
            .addCase(setUsers.pending, (state) => {
                state.status = 'loading';
            })
    }
})

export const { deleteUser, addUser } = userSlice.actions
// export default userSlice.reducer;
// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./reducer/user.slice";

// const store = configureStore({
//     reducer: {
//         users: userSlice,
//     }
// })

// export default store;