import React, { useState, useEffect } from "react";

export default function Popup({ message, onClose, backgroundColor }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  const popupStyle = {
    backgroundColor: backgroundColor, 
  };

  return (
    <div className={`popup ${visible ? "visible" : "hidden"}`} style={popupStyle}>
      <div className="popup-content">
        <p>{message}</p>
      </div>
    </div>
  );
}

