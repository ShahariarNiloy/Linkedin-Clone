import db, { auth, provider, storage } from "../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  setDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./actionsTypes";

export const setUser = (payload: any) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status: any) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload: any) => ({
  type: GET_ARTICLES,
  payload: payload,
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
    dispatch(setLoading(true));
    if (payload.image !== undefined) {
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
              image: payload.user.photoURL,
            },
            video: "",
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      const dbCollection = collection(db, "articles");
      setDoc(doc(dbCollection), {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload?.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    } else {
      const dbCollection = collection(db, "articles");
      setDoc(doc(dbCollection), {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: "",
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticlesAPI() {
  return (dispatch: any) => {
    let payload;
    const dbCollection = collection(db, "articles");
    const q = query(dbCollection, orderBy("actor.date", "desc"));
    onSnapshot(q, (snapshot: any) => {
      payload = snapshot.docs.map((doc: any) => doc.data());
      dispatch(getArticles(payload));
    });
  };
}
