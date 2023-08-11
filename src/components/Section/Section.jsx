import { FeedbackOptions } from "components/Feedback/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"
import {Title } from "./Section.styled.js";

export const Section = ({title, onButtons, clicksGood, clicksNeutral, clicksBad, sum, part}) => {
    return (
        <div>
            <Title>{title}</Title>
            <FeedbackOptions  onButtons = {onButtons} />
            <Statistics part={part} sum={sum} clicksGood={clicksGood} clicksNeutral={clicksNeutral} clicksBad={clicksBad} />
        </div>
        

    )
}