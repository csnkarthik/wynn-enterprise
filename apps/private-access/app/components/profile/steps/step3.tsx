import { Fragment } from 'react';
import UlDescription from '../utilities/UlDescription';
import "./SummaryparialPage.scss";
import Link from 'next/link';
function Step3() {
    const titl = "Summary";
    const desc = "Please take a moment to ensure the below information is correct before you click “Submit.”"
    function SummaryParialPage() {
        return (
            <Fragment>
                <div>
                    <h3 className='text-start pb-1'>Your Information</h3>
                    <p className='text-capitalize labels mb-1'> First & Last Name</p>
                    <p className='mb-2 text-capitalize '>Dilish Velayudhan</p>
                    <p className='text-capitalize mb-1 labels'>Email Address</p>
                    <p className='mb-2'>dilish.velayudhan@wynnlasvegas.com</p>

                </div>
                <div>
                    <h3 className='text-start'>Contact Detail</h3>
                    <p className='text-capitalize labels mb-1'> address</p>
                    <p className='mb-2'>855, Las Vegas, NV, 12345 <br /> Suite  100</p>
                    <p className='text-capitalize mb-1 labels'>mobile phone</p>
                    <p className='mb-2'>100-011-1100</p>
                    <p className='text-capitalize mb-1 labels'>home phone</p>
                    <p className='mb-2'>100-011-1100</p>
                </div>
                <div>
                    <h3 className='text-start'>About You</h3>
                    <p className='labels mb-1'> As a Private Access member, your opinions matter to our team. During your stay, which elements make you feel valued and appreciated?
                    </p>
                    <p className='mb-2'>hello</p>
                    <p className=' mb-1 labels'>As we strive to anticipate your needs, please indicate the reasons you repeatedly choose Wynn and Encore Las Vegas.</p>
                    <p className='mb-2'>hello</p>
                    <p className='text-capitalize mb-1 labels'>Because we take pride in providing personalized experiences, which elements of service or amenities make you feel special and recognized?</p>
                    <p className='mb-2'>100-011-1100</p>
                    <p className='text-capitalize mb-1 labels'>Inspiring our guests is also key to our philosophy — with that in mind, what inspires you?</p>
                    <p className='mb-2'>hello</p>
                    <p className='text-capitalize mb-1 labels'>Delighting our guests is integral to everything we do. In what ways can we go above and beyond for you, either prior to or during your stay?</p>
                    <p className='mb-2'>100-011-1100</p>
                </div>
                <div className='submit-buttons ' >
                    <Link href={'/profile/enrollment/Thankyou'} type='submit' className="btn btn-primary btn-submit">
                        submit
                    </Link>
                </div>
            </Fragment>

        )
    }
    return (
        <UlDescription title={titl} description={desc} width=''>
            <div className='summaryDetail'>
                <SummaryParialPage />
            </div>

        </UlDescription>
    )
}

export default Step3;