

export const Statistics = ({clicksGood, clicksNeutral, clicksBad}) => {
    return (
        <>
            <h3>Statistics</h3>
            <ul>
                <li>Good: {clicksGood}</li>
                <li>Neutral: {clicksNeutral}</li>
                <li>Bad: {clicksBad }</li>
                <li>Total</li>
                <li>Positive feedback: </li>
            </ul>
        </>  

    )
}