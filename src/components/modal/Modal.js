import React from "react";

const Modal = ({score}) => {
    const Restart = () => {
        window.location = "/";
    };
    return (
        <div className="modal">
            <div className="modal-title">Score: {score}</div>
            <div
                onClick={Restart}
                className="modal-btn">
                Restart
            </div>
        </div>
    );
};

export default Modal;
