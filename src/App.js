import { useState } from "react";
import "./index.css";
//import "./App.css";
import Notes from "./components/Notes";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

    return (
        <div>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="What's on your mind?" />
                <Button variant="secondary">Add Note</Button>
            </div>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
    );
}

export default App;
