import { specificNote } from "../types";

interface NotesProps {
    notes: specificNote[];
}

export function Notes(props: NotesProps) {

    const segmentedNotes: (specificNote | "|")[] = [];
    for (let i = 0; i < props.notes.length; i++) {
        segmentedNotes.push(props.notes[i]);
        if ((i+1)%4===0 && i!==props.notes.length - 1) {
            segmentedNotes.push("|");
        }
    }

    return (
        <div class="notes">
            {segmentedNotes.map((note) => {
                if (note!="|") return <div class="note matra">{note}</div>
                else return <div class="vibhaag" />
            })}
        </div>
    )
}