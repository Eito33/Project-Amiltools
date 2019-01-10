import React from 'react';

const PopupCalendar = ({ title, textSuccessBtn, textCancelBtn, onClose, onSuccess, content, error, disabled }) => {
    return (
        <div id="popup">
            <div className="titleReportContent">
                {title} <span onClick={onClose} className="closeItem"><i className="fas fa-times-circle"></i></span>
            </div>
            <div className="popupContent">
                {content}
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <br />
                <button disabled={disabled} onClick={onSuccess} className="btn btn-outline-success my-2 my-sm-0" type="submit">{textSuccessBtn}</button>
                <button onClick={onClose} className="btn btn-outline-danger my-2 my-sm-0" type="submit">{textCancelBtn}</button>
            </div>
        </div>
    );
};

export default PopupCalendar;