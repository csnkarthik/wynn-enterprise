import UlDescription from 'apps/private-access/app/components/profile/utilities/UlDescription'
import Logo from 'apps/private-access/app/components/profile/utilities/logo/Logo'
import React from 'react'

function Init() {
  return (
    <section className='logo-larger'>
      <Logo />
      <UlDescription title='Congratulations on creating a wynn private access account' description='Please use this email to sign in.' width='maxWidth550'>

      </UlDescription>
    </section>
  )
}

export default Init