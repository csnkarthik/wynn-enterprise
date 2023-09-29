import Comfirmation from "../../components/profile/signIn/Comfirmation";
function Main() {
    return (
        <Comfirmation
            title='Congratulations on becoming a Wynn Private Access member'
            describePara1='We are delighted to welcome you to Private Access, 
                      the premier recognition program that rewards our most valued guests.'
            describePara2='On the following page you’ll enter our Member Portal, 
                       where you can learn more about the program, explore the benefits you 
                        now will enjoy, and communicate with the Private Access Team.'
            buttonDescription='Enroll'
            addressLink='/profile/enrollment/getstart'
        />
    )
}

export default Main;

