import { signInWithEmailAndPassword } from "firebase/auth";

export const userLogin = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);
