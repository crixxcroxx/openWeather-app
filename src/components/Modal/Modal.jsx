import { useState } from "react";

import "./modal.css";

export default function Modal() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible &&
        <div className="modal">
          <div className="modal-content">
            <i>Location not Found!</i>
            <button onClick={() => setIsVisible(false)}>
              Ok
            </button>
          </div>
        </div>
      }
    </>
  );
}