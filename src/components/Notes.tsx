import { specificNote } from "../types";
import { Matras } from "./Matras";

interface NotesProps {
    notes: specificNote[];
    taal: number[];
}

export function Notes(props: NotesProps) {

    const matras: number = props.taal.slice(-1)[0];

    props.notes.push(...Array.from({length: matras - props.notes.length % matras}, () => "" as specificNote))

    return (
        <table>
            <tbody>
                <Matras taal={props.taal} />
                <tr class="row-separator" />

                {props.notes.map((note, index) => {
                    return <>
                    {(props.taal.includes(index % matras)) && <span class="vibhaag" />}
                    <span class={note?"note":"rest"}>{note.toString().padEnd(3)}</span>
                    {((index % matras) === matras - 1) && <tr class="row-separator" />}
                    </>
                })}

                <Matras taal={props.taal} />
            </tbody>
        </table>
    )
}