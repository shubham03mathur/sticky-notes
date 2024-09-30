import { useState, useRef } from "react";
import "./index.css";
import Notes from "./components/Notes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { determinePostion } from "./lib/utils";

function App() {
    const inputRef = useRef('');
    const [notes, setNotes] = useState([
        {
            id: 1,
            text: "Learn React JS.",
        },
        {
            id: 2,
            text: "Learn how to investment.",
        },
    ]);

    const handleAddNote = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const note = formData.get('note');
        if(!note) {
            return false;
        }
        if (note.length > 50) {
            alert("Please keep it short 🙂");
            return false;
        }
        inputRef.current.value = '';
        const currentState = [...notes];
        const coords = determinePostion();
        currentState.push({
            id: notes.length + 1,
            text: note,
            coords: coords,
        });

        setNotes(currentState);
        localStorage.setItem("notes", JSON.stringify(currentState));
    };

    return (
        <div>
            <form onSubmit={handleAddNote}>
                <div className="flex w-full items-center justify-center mt-8">
                    <Input
                        name="note"
                        required="required"
                        ref={inputRef}
                        type="text"
                        className="w-1/3 outline-none"
                        placeholder="What's on your mind?"
                    />
                    <Button
                        type="submit"
                        variant="destructive"
                        size="lg"
                        className="m-1"
                    >
                        Add Note
                    </Button>
                </div>
            </form>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
    );
}

export default App;
