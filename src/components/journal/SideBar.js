import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";
import { firebase } from "../../firebase/firebaseConfig";
import { JournalEntries } from "./JournalEntries";

export const SideBar = () => {
  const { name } = useSelector((state) => state.auth);
  const { providerData } = firebase.auth().currentUser;

  const { photoURL } = providerData[0];
  const dispatch = useDispatch();


  const handleLogOut = () => {
    dispatch(startLogout());
  };

  
  const handleAddNew = () => {
    dispatch( startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <img src={photoURL} alt="profile" className="journal__profile" />
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>{name}</span>
        </h3>

        <button className="btn" onClick={handleLogOut}>
          Log out
        </button>
      </div>

      <div className="journal__new-entry" 
            onClick={handleAddNew}
      >
        <img
          className="journal__img-entry"
          src={`../assets/2830540.png`}
          alt="entry button"
        />
        <p className="mt-5">New Entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
