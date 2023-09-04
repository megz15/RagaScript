import { specificNote } from "../types";
import { Matras } from "./Matras";

interface NotesProps {
    notes: specificNote[];
    taal: number[];
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
        <table>
            <tbody>
                <Matras taal={props.taal} />
                
                {segmentedNotes.map((note) => {
                    if (note!="|") return <span class="note">{note.padEnd(3)}</span>
                    else return <span class="vibhaag" />
                })}

                {/* <Matras taal={props.taal} /> */}
            </tbody>
        </table>
    )
}