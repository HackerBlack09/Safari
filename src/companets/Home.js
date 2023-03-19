import logo from "../img/Logo.png"
// import gril from "../img/gril.png"
import radic from "../img/radic.png"
import expl from "../img/expl.png"
import { Shop } from "../page/Shop"
import { Footer } from "../page/Footer"

export function Home() {
    return (
        <>
            <div className="bigg">
                <div className="home_big">
                    <div className="logoo">
                    </div>
                    <img src={logo} alt="" className="logo" />
                    <div className="ico">
                        <img src={radic} alt="" /><br /><br />
                        <img src={expl} alt="" />
                    </div>
                </div>
                <div className="shop">
                    <Shop />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    )
}