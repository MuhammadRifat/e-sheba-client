import firebase from "firebase/app";
import "firebase/auth";

// For user login
export const handleLogIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });
}

// For manually user sign up
export const handleSignUp = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => { 
    updateUserName(name);
    const user = userCredential.user;
    console.log(user);
    return user;
  })
  .catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });
}

// update user name
const updateUserName = name => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name
    }).then(res => {
      
    }).catch(error => {
      console.log(error);
    });
}