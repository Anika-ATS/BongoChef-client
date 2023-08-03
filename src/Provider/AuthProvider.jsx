
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, GithubAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    console.log(children);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //social login
    const googlepProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //sign in
    //  google
    const googlepSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }
    // github
    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googlepProvider)
    }

    const createUser = (email, password,image) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,image);

    }
    const SignInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);


    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, LoggedInUser => {
            console.log("hi", LoggedInUser);
            setUser(LoggedInUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();

        }


    }, [])

    //    user profile
    const udateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })


    }


    // {displayName:"anika"};
    const AuthInfo = { user, createUser, SignInUser, logOut, loading, googlepSignIn, udateUserProfile, githubSignIn }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;