import { FeedbackOptions } from "components/Feedback/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"


export const Section = ({title, onButtons, clicksGood, clicksNeutral, clicksBad}) => {
    return (
        <div>
            <h2>{title}</h2>
            <FeedbackOptions onButtons = {onButtons} />
            <Statistics clicksGood={clicksGood} clicksNeutral={clicksNeutral} clicksBad={clicksBad} />
        </div>
        

    )
}