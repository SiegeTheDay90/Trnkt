import {useState} from 'react';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import LoginFormModal from '../session/LoginFormModal.jsx';
const FormModal = () => {
    const sessionUser = useSelector(state => state.session.user);

    const closeModal = (e) => {
        e.preventDefault();
        document.getElementById('OverlayContainer').close();
    }

    if(sessionUser) return <Redirect to="/" />;

    return(
    <dialog id="OverlayContainer">
        <button id="CloseModalButton" onClick={closeModal}>×</button>
        <LoginFormModal />

    </dialog>
    )
}

export default FormModal;