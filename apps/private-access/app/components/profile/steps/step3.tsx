import { Fragment } from 'react';
import UlDescription from '../utilities/UlDescription';
import "./SummaryparialPage.scss";
import SummaryParialPage from "./SummaryParialPage";
function Step3() {
    const titl = "Summary";
    const desc = "Please take a moment to ensure the below information is correct before you click “Submit.”"
   
    return (
        <UlDescription title={titl} description={desc} width=''>
            <div className='summaryDetail'>
                <SummaryParialPage />
            </div>

        </UlDescription>
    )
}

export default Step3;