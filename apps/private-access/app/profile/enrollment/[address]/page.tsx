import "./step1.scss";
import React from 'react'
import Step1 from 'apps/private-access/app/components/profile/steps/Step1';
import Step2 from 'apps/private-access/app/components/profile/steps/Step2';
import Step3 from "apps/private-access/app/components/profile/steps/step3";
import EnrollmentSteps from "apps/private-access/app/components/profile/EnrollmentSteps";
import Error from "../error";
function GetStarted(props: any) { // need a proper datatype
    const paramsAddress = props.params.address;
    const StepProgress: any = () => { // need a proper datatype
        // step 3 of the enrollment page
        switch (paramsAddress) {
            case 'getstart':
                return (<>
                    <EnrollmentSteps />
                    <Step1 />
                </>)
                break;
            case 'aboutyou':
                return (<>
                    <EnrollmentSteps />
                    <Step2 />
                </>)
                break;
            case 'summary':
                return (<>
                    <EnrollmentSteps />
                    <Step3 />
                </>)
                break;
            default:
                // default page if the url is different.
                return (< Error />)
        }
    }

    return (
        <div className="container">
            {props.params.address && <StepProgress />}
        </div>

    )
}

export default GetStarted;