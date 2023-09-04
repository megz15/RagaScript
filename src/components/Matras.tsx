interface MatraProps {
    taal: number[];
}

export function Matras(props: MatraProps) {
    return <tr class="matra-row">
        {[...Array(props.taal.slice(-1)[0]).keys()].map((matra) => {
            return <>
                {(props.taal.includes(matra)) && <span class="vibhaag" />}
                <span class="note matra">{(matra + 1).toString().padEnd(3)}</span>
            </>
        })}
    </tr>
}