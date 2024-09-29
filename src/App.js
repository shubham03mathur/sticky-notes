import { useState } from "react";
import "./index.css";
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
            <div className="flex w-full items-center justify-center mt-8">
                <Input type="text" className="w-1/3 outline-none" placeholder="What's on your mind?" />
                <Button variant="destructive" size="lg" className="m-1">Add Note</Button>
            </div>
            <Notes notes={notes} setNotes={setNotes} />
        </div>
    );
}

export default App;
