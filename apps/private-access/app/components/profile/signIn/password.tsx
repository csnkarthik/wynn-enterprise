import React from 'react'
import "./password.scss";
import CheckBox from '../utilities/progressSteps/CheckBox';
import Link from 'next/link';
function Password() {
    //passing data  to render reuseable components;
    const informationPassForCheckbox = () => {
        return (<>By checking this box, I am confirming that I am at least 21 years old, I am not currently on any Casino Voluntary Self-Limit List, and I have read and agree to the <a href="https://www.visitwynn.com/tc/index.cfm?term_id=708708&amp;_ga=2.58004643.807548922.1545345355-1023184388.1545345355&amp;_gl=1*wq7sjt*_gcl_aw*R0NMLjE2NzM1MzQzMzEuQ2owS0NRaUFfUDZkQmhEMUFSSXNBQUdJN0hDc1JheVR6OFN2UDctRjhKa1JJc3Y1ZmliazU1bzVUa3BYcnk0Tjl3VWxDQ194ZTNhd2lVQWFBbHJZRUFMd193Y0I.*_gcl_dc*R0NMLjE2NzM1MzQzMzEuQ2owS0NRaUFfUDZkQmhEMUFSSXNBQUdJN0hDc1JheVR6OFN2UDctRjhKa1JJc3Y1ZmliazU1bzVUa3BYcnk0Tjl3VWxDQ194ZTNhd2lVQWFBbHJZRUFMd193Y0I." target="_blank">Terms of Use</a> and <a href="https://www.wynnlasvegas.com/privacy-policy" target="_blank">privacy policy</a>. I also consent to receive promotions from Private Access and Wynn Las Vegas.</>)
    }
    return (<form action="" className="passwords">
        <fieldset className="field">
            <legend className="legends visually-hidden-focusable">
                password setup
            </legend>
            <div className="stepField mb-3">
                <label className="form-label"> Email Address</label>
                <input type="text" className="email-user form-control" value={'wynn.lasvegas@wynnlasvegas.com'} />
            </div>
            <div className="stepField mb-3 password">
                <div>
                    <label className="form-label"> New Password</label>
                    <input type="text" name="street" className="form-control" />
                    <p className='mt-2 mb-0 character successStatus'>Password must be 8-25 character</p>
                    <p className='mt-2 mb-0 digit dangerStatus'>Must include at least one number</p>
                </div>
                <div className='mt-3'>
                    <label className="form-label"> Confirm Password</label>
                    <input type="text" name="street" className="form-control" />
                </div>
            </div>
            <CheckBox >{informationPassForCheckbox()}</CheckBox>
            <div className='submit-buttons' >
                <Link href={'/profile/enrollment/EmailComfirmation'} type='submit' className="btn btn-primary btn-submit">
                    save and continue
                </Link>
            </div>
        </fieldset>
    </form>
    )
}

export default Password;