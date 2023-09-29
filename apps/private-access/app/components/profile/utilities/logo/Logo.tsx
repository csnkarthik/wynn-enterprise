import Image from 'next/image'
import logo from "../../../../../public/image/WynnPrivateAccess_Lockup_Bronze 1.svg";
import "./header.scss";
function Logo() {
  return (
    <div className="container">
      <div className='logo d-flex' >
        <Image src={logo} width={98} height={78} alt='private access Logo Link' className='mx-auto' />
      </div>
    </div>
  )
}

export default Logo