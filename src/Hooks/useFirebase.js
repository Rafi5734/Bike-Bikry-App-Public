import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeAuthentication } from "../Firebase/firebase.initialize";

initializeAuthentication();
const googleAuthProvider = new GoogleAuthProvider();

const useFirebase = () => {
    // start Authentication info....
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    };

    // observe User State//////////////////////////////
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
    }, []);

    // user login//////////////////////////////////////
    const logIn = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const redirect_uri = location.state?.from || "/home";
                history.push(redirect_uri);
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };
    // user registration///////////////////////////////

    const registerUser = (email, password, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // saveUser(email);
                // saveUser(email);
                const redirect_uri = location.state?.from || "/home";
                history.push(redirect_uri);
                const user = userCredential.user;

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetch(`https://stark-spire-82280.herokuapp.com/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setAdmin(data.admin);
            });
    }, [user?.email]);

    const googleSignOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({});
            })
            .finally(() => setIsLoading(false))
            .catch((error) => {
                // An error happened.
            });
    };

    // end Authentication info....

    // start data info

    const [products, setProduct] = useState([]);
    const [btn, setBtn] = useState([]);
    const [sortItems, setSortItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("https://stark-spire-82280.herokuapp.com/services")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    const handleCart = (p) => {
        // console.log(p);
    };

    // console.log(user);

    const handleAddToCart = (index) => {
        const foundData = products[index];
        foundData.email = user?.email;
        foundData.status = "pending...";
        fetch("https://stark-spire-82280.herokuapp.com/placeorder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(foundData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return {
        cartItems,
        sortItems,
        admin,
        user,
        signInUsingGoogle,
        googleSignOut,
        btn,
        handleAddToCart,
        handleCart,
        products,
        setIsLoading,
        isLoading,
        registerUser,
        logIn,
    };
};
export default useFirebase;
