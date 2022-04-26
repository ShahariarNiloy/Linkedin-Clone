import db, { auth, provider, storage } from "../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, setDoc, doc } from "firebase/firestore";
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

export function postArticleAPI(payload: any) {
  return (dispatch: any) => {
    if (payload.image != "") {
      const upload = uploadBytesResumable(
        ref(storage, `images/${payload.image.name}`),
        payload.image
      );

      upload.on(
        "state_changed",
        (snapshot: any) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress: ${progress}`);

          if (snapshot.state === "RUNNING") {
            console.log(`Running progress: ${progress}`);
          }
        },
        (error: any) => console.log(error.code),
        async () => {
          const downloadURL = await getDownloadURL(upload.snapshot.ref);
          const dbCollection = collection(db, "articles");
          await setDoc(doc(dbCollection), {
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.use.photoURL,
            },
            video: payload?.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
        }
      );
    }
  };
}
