import { auth, provider } from "../../firebase/firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { SET_USER } from "./actionsTypes";

export const setUser = (payload: any) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch: any) => {
    signInWithPopup(auth, provider)
      .then((payload: any) => {
        dispatch(setUser(payload.user));
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch: any) => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch: any) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}
