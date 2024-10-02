import { createRef, useEffect, useRef } from "react";
import Note from "./Note";

import { determinePostion } from "../lib/utils";

const Notes = ({ notes = {}, setNotes = () => {} }) => {
    const noteRefs = useRef([]);
    useEffect(() => {
        let notesTobeRendered = [];
        const notesStack = localStorage.getItem("notes");
        if (notesStack) {
            notesTobeRendered = JSON.parse(notesStack);
        } else {
            notesTobeRendered = notes.map((note) => {
                note.coords = determinePostion();
                return { ...note };
            });
        }
        setNotes(notesTobeRendered);
        localStorage.setItem("notes", JSON.stringify(notesTobeRendered));
    }, [notes.length]);

    const handleDragStart = (event, note) => {
        event.preventDefault();
        const isTouchEvent = event.type === "touchstart";
        const currentNote = noteRefs.current[note.id].current;
        const startPos = note.coords;

        const startX = isTouchEvent ? event.touches[0].clientX : event.clientX;
        const startY = isTouchEvent ? event.touches[0].clientY : event.clientY;

        const osX = startX - startPos.x;
        const osY = startY - startPos.y;

        const handleMouseMove = (moveEvent) => {
            moveEvent.preventDefault();
            const moveX = isTouchEvent ? moveEvent.touches[0].clientX : moveEvent.clientX;
            const moveY = isTouchEvent ? moveEvent.touches[0].clientY : moveEvent.clientY;

            let newLeft = moveX - osX;
            let newTop = moveY - osY;

            const maxLeft = window.innerWidth - currentNote.offsetWidth;
            const maxTop = window.innerHeight - currentNote.offsetHeight;

            newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            newTop = Math.max(0, Math.min(newTop, maxTop));

            currentNote.style.left = `${newLeft}px`;
            currentNote.style.top = `${newTop}px`;
        };

        const handleMouseUp = () => {
            document.removeEventListener(isTouchEvent ? "touchmove" : "mousemove", handleMouseMove);
            document.removeEventListener(isTouchEvent ? "touchend" : "mouseup", handleMouseUp);

            const finalSnapshot = currentNote.getBoundingClientRect();
            const newPosition = { x: finalSnapshot.left, y: finalSnapshot.top };

            if (checkForOverlap(note.id)) {
                currentNote.style.left = `${startPos.x}px`;
                currentNote.style.top = `${startPos.y}px`;
            } else {
                updateNewPosition(note.id, newPosition);
            }
        };
        const checkForOverlap = (noteId) => {
            const currentNote = noteRefs.current[noteId].current;
            const currentRect = currentNote.getBoundingClientRect();
            return notes.some((el) => {
                if (el.id === noteId) return false;
                const noteRect =
                    noteRefs.current?.[el.id].current.getBoundingClientRect();
                return !(
                    currentRect.left > noteRect.right ||
                    currentRect.right < noteRect.left ||
                    currentRect.bottom < noteRect.top ||
                    currentRect.top > noteRect.bottom
                );
            });
        };
        document.addEventListener(isTouchEvent ? "touchmove" : "mousemove", handleMouseMove);
        document.addEventListener(isTouchEvent ? "touchend" : "mouseup", handleMouseUp);
    };

    const handleClick = (event, noteId) => {
        event.preventDefault();
        const isConfirmed = confirm("Are you sure you want to delete this note?");
        if (isConfirmed) {
            const filteredNotes = notes.filter(note => {
                return note.id !== noteId;
            });

            setNotes(filteredNotes);
            localStorage.setItem("notes", JSON.stringify(filteredNotes));
        }
    }

    const updateNewPosition = (id, newPos) => {
        const n = notes.findIndex((nt) => nt.id === id);
        const stateToBeUpdated = [...notes];
        stateToBeUpdated[n].coords = {...newPos};
        setNotes(stateToBeUpdated);
        localStorage.setItem("notes", JSON.stringify(stateToBeUpdated));
    };

    return notes.map((note) => {
        return (
            <Note
                key={note.id}
                ref={
                    noteRefs.current[note.id]
                        ? noteRefs.current[note.id]
                        : (noteRefs.current[note.id] = createRef())
                }
                content={note.text}
                initialPosition={note?.coords}
                onMouseDown={(e) => handleDragStart(e, note)}
                onTouchStart={(e) => handleDragStart(e, note)}
                onClickHandler={(e) => handleClick(e, note.id)}
            />
        );
    });
};

export default Notes;
