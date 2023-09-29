import Image from 'next/image'
import logo from "../../../../../public/image/private-access-welcome-logo.svg";
import "./header.scss";
function Logo() {
    return (
        <div className="container">
            <div className='welcome-logo d-flex' >
                <Image src={logo} width={373} height={126} alt='private access Logo Link' className='mx-auto' />
            </div>
        </div>
    )
}

export default Logo