import { useState } from "react";
import "./index.css";
import Notes from "./components/Notes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { determinePostion } from "./lib/utils";

function App() {
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

    const [userNote, setUserNote] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleAddNote = () => {
        setUserNote('');
        const currentState = [...notes];
        const coords = determinePostion();
        currentState.push({
            id: notes.length + 1,
            text: userNote,
            coords: coords
        });

        setNotes(currentState);
        localStorage.setItem("notes", JSON.stringify(currentState));
    }

    return (
        <>
        <div>
            <div className="flex w-full items-center justify-center mt-8">
                <Input value={userNote} onChange={(e) => setUserNote(e.target.value) } type="text" className="w-1/3 outline-none" placeholder="What's on your mind?" />
                <Button onClick={handleAddNote} variant="destructive" size="lg" className="m-1">Add Note</Button>
            </div>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
        </>
    );
}

export default App;
