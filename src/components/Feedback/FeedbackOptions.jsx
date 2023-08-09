

export const FeedbackOptions = ({onButtons}) => {
    return (
        <ul>
            <li><button onClick={() => onButtons('good')} id="good">Good</button></li>
            <li><button onClick={() => onButtons('neutral')} id="neutral">Neutral</button></li>
            <li><button onClick={() => onButtons('bad')} id="bad">Bad</button></li>
        </ul>  

    )
}