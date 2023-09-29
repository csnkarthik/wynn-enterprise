import Password from 'apps/private-access/app/components/profile/signIn/password';
import UlDescription from 'apps/private-access/app/components/profile/utilities/UlDescription'
import Logo from 'apps/private-access/app/components/profile/utilities/logo/Logo';
import React from 'react'

function AboutYou() {
  const titl = "welcome rachel";
  const desc = " Your Private Access account requires a password. Please take a moment to create a unique password so you can securely authenticate your account during every visit."

  return (
    <section className="container logo-larger">
      <Logo />
      <UlDescription title={titl} description={desc} width='maxWidth450'>
        <Password />
      </UlDescription>
    </section>
  )
}

export default AboutYou