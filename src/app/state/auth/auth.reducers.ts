import { User } from "src/app/model/user";
import { AuthActionTypes, All } from './auth.actions';

export interface State {
  isAuthenticated: boolean
  user: User | null
  errorMessage: string | null
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

// export function reducer(state = initialState, action: All): State {
//   switch (action.type) {
//     case AuthActionTypes.LOGIN_SUCCESS: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: {
//           token: action.payload.token,
//           username: action.payload.username
//         },
//         errorMessage: null
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// }