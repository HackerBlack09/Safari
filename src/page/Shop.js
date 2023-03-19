import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
import img5 from "../img/img5.png"
import img6 from "../img/img6.png"
import img7 from "../img/img7.png"
import img8 from "../img/img8.png"
import img9 from "../img/img9.png"
import img10 from "../img/img10.png"
import img11 from "../img/img11.png"
import scrol from "../img/scrol.png"
import te from "../img/te.png"

export function Shop() {
    const [shopcard, setShopcard] = useState([
        { rasm: img1, nomi: "Multicolored armless top", narxi: "₦10,000" },
        { rasm: img2, nomi: "Grey bee wrist-watch", narxi: "₦10,000" },
        { rasm: img1, nomi: "Mini skirt", narxi: "₦10,000" },
        { rasm: img1, nomi: "Red lightweight gown", narxi: "₦10,000" },
        { rasm: img1, nomi: "Blue botton-down gown", narxi: "₦10,000" },
        { rasm: img3, nomi: "Moon and star neckpiece", narxi: "₦10,000" },
        { rasm: img4, nomi: "Tambourine Crossbody Bag", narxi: "₦10,000" },
        { rasm: img5, nomi: "Katy Perry Killer Queen EDP", narxi: "₦10,000" },
        { rasm: img6, nomi: "High heels ladies shoes", narxi: "₦10,000" },
        { rasm: img7, nomi: "Nerdy oval glasses", narxi: "₦10,000" },
        { rasm: img8, nomi: "Diamond ladies ring", narxi: "₦10,000" },
        { rasm: img1, nomi: "Ladies bush pants", narxi: "₦10,000" },
        { rasm: img9, nomi: "Guilhermina Embellished Slides", narxi: "₦10,000" },
        { rasm: img10, nomi: "Superga Plaid Sneakers", narxi: "₦10,000" },
        { rasm: img1, nomi: "Checked ladies trouser", narxi: "₦10,000" },
        { rasm: img11, nomi: "Beanie winter fleece", narxi: "₦10,000" },
    ])

    return (
        <>
            <div className="shop_big">
                <div className="text">
                    <div className="bor"></div>
                    <h1 className="bor_h1">Shop your style</h1>
                    <div className="bor"></div>
                </div>
                <div className="pdp">
                    <p className="bor_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus adipiscing<br />
                        viverra at tortor, egestas odio parturient. Morbi ut lorem in erat. Et et molestie diam diam ultricies.<br />
                        Scelerisque duis diam ac cras dictum adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.</p>
                </div>
                <div className="shop_card">
                    {shopcard.map((iteam, index) => (
                        <div className="shopping" key={index}>
                            <div className="content">
                                <h1 className="like"><AiOutlineHeart /></h1>
                                <button className="carts">ADD TO CART <span><FaCartPlus/></span> </button>
                            </div>
                            <img src={iteam.rasm} alt="" />
                            <p>{iteam.nomi}</p>
                            <p>{iteam.narxi}</p>
                        </div>
                    ))}
                </div>
                <div className="crlo">
                    <img src={scrol} alt="" className="crl"/>  
                    <img src={te} alt="" className="te"/>
                </div>
            </div>
        </>
    )
}