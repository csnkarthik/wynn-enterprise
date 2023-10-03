import React from 'react'
import WelcomeLogo from '../utilities/logo/WelcomeLogo';
import "./comfitmation.scss";
import Link from 'next/link';
function Comfirmation({ title, describePara1, describePara2, buttonDescription, addressLink }:
    { title: string, describePara1: string, describePara2: string, buttonDescription: string, addressLink: string }) {
    return (
        <section>
            <WelcomeLogo />
            <div className="thankyou">
                <div className="container">
                    <h1 className='title-header'>{title}</h1>
                    <div className="content text-center">
                        <p className='mt-2 px-3 px-sm-0'>
                            {describePara1}
                        </p>
                        <p className='mt-4'>
                            {describePara2}
                        </p>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Link href={addressLink} className="btn btn-primary btn-submit">
                        {buttonDescription}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Comfirmation