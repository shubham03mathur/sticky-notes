/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const Note = forwardRef((
    { content, initialPosition, onClickHandler, ...props },
    ref
) => {
    return (
        <div
            ref={ref}
            className="absolute flex flex-col p-2 w-48 h-28 cursor-move border rounded-md border-yellow-200 bg-yellow-300 sm:w-60 sm:h-32 md:w-72 md:h-36"
            style={{
                left: `${initialPosition?.x}px`,
                top: `${initialPosition?.y}px`,
                userSelect: "none",
            }}
            {...props}
        >
            <div title="click to remove/unpin" className="font-mono text-lg flex w-full cursor-pointer justify-center"><span onClick={onClickHandler} >📌</span></div>
            <div className="font-mono text-amber-700 leading-relaxed break-words"><p> {content}</p></div>
        </div>
    );
});

export default Note;
