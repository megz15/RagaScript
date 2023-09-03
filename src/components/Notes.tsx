import { specificNote } from "../types";

interface NotesProps {
    notes: specificNote[];
}

export function Notes(props: NotesProps) {
    return (
        <div class="notes">
            {props.notes.map((note) => (
                <button>{note}</button>
            ))}
        </div>
    )
}