/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Note = forwardRef((
    { content, initialPosition, ...props },
    ref
) => {
    return (
        <div
            ref={ref}
            style={{
                position: "absolute",
                padding: "10px",
                left: `${initialPosition?.x}px`,
                top: `${initialPosition?.y}px`,
                display: "flex",
                width: "200px",
                height: "100px",
                userSelect: "none",
                cursor: "move",
                border: "1px solid #000",
                backgroundColor: "#c36542",
                // overflowX: "none",
                // overflowY: "auto",
            }}
            {...props}
        >
            <p>📌 {content}</p>
        </div>
    );
});

export default Note;
