import { Title, Text } from "./Statistics.styled";

export const Statistics = ({clicksGood, clicksNeutral, clicksBad, sum, part}) => {
    return (
        <>
            <Title>Statistics</Title>
            <ul>
                <Text>Good: {clicksGood}</Text>
                <Text>Neutral: {clicksNeutral}</Text>
                <Text>Bad: {clicksBad }</Text>
                <Text>Total: { sum}</Text>
                <Text>Positive feedback: {part}%</Text>
            </ul>
        </>  

    )
}