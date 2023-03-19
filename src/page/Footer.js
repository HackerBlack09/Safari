import logo from "../img/Logo.svg"
import lnk from "../img/lnk.png"
import sti from "../img/sti.png"
import eml from "../img/eml.png"
import messg from "../img/messg.png"

export function Footer() {
    return (
        <>
            <div className="footer_big">
                <div className="lgo">
                    <img src={logo} alt="" />
                </div>
                <div className="lnk">
                    <img src={lnk} alt="" />
                </div>
                <div className="sti">
                    <img src={sti} alt="" />
                </div>
                <div className="eml">
                    <img src={eml} alt="" />
                </div>
                <div className="messg">
                    <img src={messg} alt="" />
                </div>
            </div>
        </>
    )
}