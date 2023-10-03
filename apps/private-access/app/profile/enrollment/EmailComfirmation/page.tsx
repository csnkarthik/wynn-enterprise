import "./emailcomfirmation.scss";
import UlDescription from 'apps/private-access/app/components/profile/utilities/UlDescription'
import Logo from 'apps/private-access/app/components/profile/utilities/logo/Logo'
import Link from 'next/link'
import React from 'react'
// email confirmation 
function Init() {
  return (
    <section className='logo-larger emailConfirm'>
      <Logo />
      <UlDescription title='Congratulations on creating a wynn private access account' description='Please use this email to sign in.' width='maxWidth550'>
        <div className="form-control border border-0 email-control d-flex justify-content-between email-review">
          <p className="m-0">wynnlasvagas@wynn.com</p>
          <button className="btn-copy text-white d-flex justify-content-end">
            Copy
          </button>
        </div>
        <div className='d-flex justify-content-center'>
          <Link href={''} className="btn btn-primary shorter-btn">
            Sign IN
          </Link>
        </div>
        <p className="mt-5 text-center">Need help? Call <Link className="telPhone" href={'7027707077'}>(702) 770-7077</Link></p>
      </UlDescription>
    </section>
  )
}

export default Init