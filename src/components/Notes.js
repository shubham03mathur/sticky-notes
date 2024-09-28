import Note from "./Note";

const Notes = ({ notes = {}, setNotes = () => {} }) => {
    const notesStack = localStorage.getItem("notes") || notes;

    const determinePostion = () => {
        const positionX = window.innerWidth - 250;
        const positionY = window.innerHeight - 250;

        return {
            x: Math.floor(Math.random() * positionX),
            y: Math.floor(Math.random() * positionY),
        };
    };

    localStorage.setItem("notes", JSON.stringify());

    return notesStack.map((note, i, stack) => {
        if (!(note.x || note.y)) {
            const coords = determinePostion();
            stack[i].coords = coords;
            return (
                <Note
                    key={note.id}
                    content={note.text}
                    initialPosition={coords}
                />
            );
        }

        return (
            <Note
                key={note.id}
                content={note.text}
                initialPosition={note.coords}
            />
        );
    });
};

export default Notes;
