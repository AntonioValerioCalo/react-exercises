import { createSlice } from "@reduxjs/toolkit";

export const todosReducer = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    add: (state, action) => [...state, ...action.payload],
    remove: (state, action) =>
      state.filter((user) => user.id !== action.payload),
      edit:(state,action)=>{
          const {id, data } = action.payload
          const user = state.find(u=> u.id === id )
          
          for (let key in data ){
            user[key] = data[key]
          }
        }
    },
    clear:(state,action)=>[]
});

// const defaultState = [];

// const ADD = "USER@ADD";
// const REMOVE = "USER@REMOVE";
// const EDIT = "User@EDIT";
// const CLEAR = "USER@CLEAR";

// export function addUser(user) {
//   return {
//     type: ADD,
//     payload: user,
//   };
// }

// export function removeUser(id) {
//   return {
//     type: REMOVE,
//     payload: id,
//   };
// }

// export function editUser(id, data) {
//   return {
//     type: EDIT,
//     payload: { id, data },
//   };
// }

// export function clearUser() {
//   return {
//     type: CLEAR,
//   };
// }

// export function userReducer(state = defaultState, action) {
//   switch (action.type) {
//     case ADD: {
//       return [...state, action.payload];
//     }
//     case REMOVE: {
//       return state.filter((user) => user.id !== action.payload);
//     }
//     case EDIT: {
//       return state.map((user) => {
//         if (user.id === action.payload.id) {
//           return { ...user, ...action.payload.data };
//         }
//         return user;
//       });
//     }
//     case CLEAR: {
//       return defaultState
//     }
//     default: {
//       return state;
//     }
//   }
// }
