import React, { useRef } from "react";

interface ModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    children: React.ReactNode;
}

const Modal = ({ setShowModal, title, children }: ModalProps) => {
    const background = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        setShowModal(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="modal">
            <div
                className="background"
                ref={background}
                onClick={(e) => {
                    background.current === e.target && closeModal();
                }}
            >
                <div className="container">
                    <div className="top">
                        <span>{title && title}</span>
                        <div className="containerBtn">
                            <button
                                className="closeBtn"
                                onClick={closeModal}
                            ></button>
                        </div>
                    </div>
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
