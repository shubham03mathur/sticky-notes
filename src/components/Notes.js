import { createRef, useEffect, useRef } from "react";
import Note from "./Note";

const Notes = ({ notes = {}, setNotes = () => {} }) => {
    let notesTobeRendered = [];
    const noteRefs = useRef([]);

    useEffect(() => {
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

    const determinePostion = () => {
        const positionX = window.innerWidth - 250;
        const positionY = window.innerHeight - 250;

        return {
            x: Math.floor(Math.random() * positionX),
            y: Math.floor(Math.random() * positionY),
        };
    };

    const handleDragStart = (event, note) => {
        const currentNote = noteRefs.current[note.id].current;
        const rect = currentNote.getBoundingClientRect();
        const startPos = note.coords;

        const handleMouseMove = () => {
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;

            currentNote.style.left = `${offsetX}px`;
            currentNote.style.top = `${offsetY}px`;
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);

            const finalSnapshot = currentNote.getBoundingClientRect();
            console.log(finalSnapshot);
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
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const updateNewPosition = (id, newPos) => {
        const n = notes.findIndex((nt) => nt.id === id);
        const stateToBeUpdated = [...notes];
        stateToBeUpdated[n].coords = {...newPos};
        console.log(stateToBeUpdated);
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
                className="sticky-note"
            />
        );
    });
};

export default Notes;
