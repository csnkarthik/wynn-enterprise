import Comfirmation from 'apps/private-access/app/components/profile/signIn/Comfirmation'
import React from 'react'
// after setup projects
function SignIn() {
  return (
    <Comfirmation
      title='Congratulations on becoming a Wynn Private Access member'
      describePara1='We are delighted to welcome you to Private Access, 
                      the premier recognition program that rewards our most valued guests.'
      describePara2='On the following page you’ll enter our Member Portal, 
                       where you can learn more about the program, explore the benefits you 
                        now will enjoy, and communicate with the Private Access Team.'
      buttonDescription='create new account'
      addressLink='/profile/enrollment/SetupPassword'
    />
  )
}

export default SignIn;