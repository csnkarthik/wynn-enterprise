import React from 'react'
import "../../sytles/header/header.scss"
import Logo from './utilities/Logo';
import StepDisplay from './utilities/StepDisplay';
function EnrollmentSteps() {
  return (
    <section className='sub-header'>
      <Logo />
      <StepDisplay />
    </section>
  )
}

export default EnrollmentSteps