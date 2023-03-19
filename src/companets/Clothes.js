import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "reactstrap"
import { AiOutlineHeart } from "react-icons/ai"
import { FaCartPlus } from "react-icons/fa"
import img1 from "../img/img1.png"


export function Clothes() {
    // const [data1, setData1] = useState([])
    // const [data, setData] = useState([])

    const [shopcard, setShopcard] = useState([
        { rasm: img1, nomi: "Red lightweight gown", narxi: "₦10,000", category: "Dresses" },
        { rasm: img1, nomi: "Multicolored armless top", narxi: "₦10,000", category: "Denim" },
        { rasm: img1, nomi: "Ladies bush pants ", narxi: "₦10,000", category: "Jeans" },
        { rasm: img1, nomi: "Mini skirt", narxi: "₦10,000", category: "Jumpsuits" },
        { rasm: img1, nomi: "Blue botton-down gown", narxi: "₦10,000", category: "Tops" },
        { rasm: img1, nomi: "Checked ladies trouser", narxi: "₦10,000", category: "Jackets and coats" },
        { rasm: img1, nomi: "Top with Pleated Skirt Satin", narxi: "₦10,000", category: "Pants" },
        { rasm: img1, nomi: "Winter Warm Woolen Parka", narxi: "₦10,000", category: "Shorts" },
        { rasm: img1, nomi: "Summer Dress for Women", narxi: "₦10,000", category: "Skirts" },
        { rasm: img1, nomi: "Women office suit", narxi: "₦10,000", category: "Loungerie & underwear" },
        { rasm: img1, nomi: "Single Breasted Cami Top", narxi: "₦10,000", category: "Leather" },
        { rasm: img1, nomi: "Twill paper bag trousers", narxi: "₦10,000", category: "Sweaters & knits" },
    ])

    // ------------------------category-----------------------

    // const category = ["All", ...new Set(data.map((val) => val.category))];

    // function fun(i) {
    //     let filter = data.filter((val) => val.category === category[i]);
    //     if (i !== 0) {
    //         setData1(filter)
    //     } else {
    //         setData1(data)
    //     }
    // }

    const [sizemassiv, setsizemassiv] = useState([
        { id: 1, size: "XXS", color: false },
        { id: 2, size: "XS", color: false },
        { id: 3, size: "S", color: false },
        { id: 4, size: "M", total: false },
        { id: 5, size: "L", total: false },
        { id: 6, size: "XL", total: false },
        { id: 7, size: "23", total: false },
        { id: 8, size: "24", total: false },
        { id: 9, size: "25", total: false },
        { id: 10, size: "26", total: false },
        { id: 11, size: "27", total: false },
        { id: 12, size: "28", total: false },
        { id: 12, size: "29", total: false },
        { id: 12, size: "30", total: false },
        { id: 12, size: "31", total: false },
        { id: 12, size: "32", total: false },
    ]);

    const [colormassiv, setcolormassiv] = useState([
        { id: 1, color: "beige", totalcolor: false },
        { id: 2, color: "red ", totalcolor: false },
        { id: 3, color: "black", totalcolor: false },
        { id: 4, color: "blue", totalcolor: false },
        { id: 5, color: "brown", totalcolor: false },
        { id: 6, color: "gold", totalcolor: false },
        { id: 7, color: "silver", totalcolor: false },
        { id: 8, color: "white", totalcolor: false },
        { id: 9, color: "purple", totalcolor: false },
        { id: 10, color: "green", totalcolor: false },
        { id: 11, color: "pink", totalcolor: false },
        { id: 12, color: "orange", totalcolor: false },
    ]);

    const [btnBolean, setBolean] = useState(0);
    const [Bolean, setcolorBolean] = useState(0);

    function sizefun(index) {
        console.log(index);
        setBolean(index);
    }
    function colorfun(index) {
        console.log(index);
        setcolorBolean(index)
    }

    return (
        <>
            <div className="clother_big">
                <div className="clother text">
                    <h1 className="clo_text">CLOTHES</h1>
                </div>
                <div className="categry">
                    <div className="txt">
                        <h1 className="cate_text">CATEGORY</h1>
                    </div>
                    <div className="hr"></div>
                    <div className="catgr">
                        <p>All</p>
                        <br />
                        <p>Dresses</p>
                        <br />
                        <p>Denim</p>
                        <br />
                        <p>Jeans</p>
                        <br />
                        <p>Jumpsuits</p>
                        <br />
                        <p>Tops</p>
                        <br />
                        <p>Jackets and coats</p>
                        <br />
                        <p>Pants</p>
                        <br />
                        <p>Shorts</p>
                        <br />
                        <p>Skirts</p>
                        <br />
                        <p>Loungerie & underwear</p>
                        <br />
                        <p>Leather</p>
                        <br />
                        <p>Sweaters & knits</p>
                        <br />
                    </div>
                    <div className="size_box">
                        <div className="size_box_mini">
                            <h2>SIZE</h2>
                            <button className="btnb">Clear x</button>
                        </div>

                        <div className="btn_box1">
                            {sizemassiv.map((iteam, index) => (
                                <button
                                    style={{ background: index === btnBolean ? "red" : "", color: index === btnBolean ? "white" : "", border: index === btnBolean ? "red" : "", }}
                                    onClick={() => sizefun(index)}
                                    key={index}
                                    className="sicle_btn"
                                >
                                    {iteam.size}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="size_box">
                        <div className="size_box_mini">
                            <h2>SIZE</h2>
                            <button className="btnb">Clear x</button>
                        </div>

                        <div className="btn_boxx">
                            {colormassiv.map((iteam, index) => (
                                <div key={index} className="mini_color_box">
                                    <button
                                        onClick={() => colorfun(index)}
                                        className="m"
                                        style={{ background: iteam.color, borderColor: index === Bolean ? "black" : "", width: index === Bolean ? "33px" : "", height: index === Bolean ? "33px" : "", }}
                                    ></button>
                                    <p className="sicle_p">{iteam.color}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="by_card">
                    <div className="option">
                        <select id="opti">
                            <option value="Sort by: Most popular">Sort by: Most popular</option>
                            <option value="Most popular">Most popular</option>
                            <option value="Best Selling">Best Selling</option>
                            <option value="Price: High to Low">Price: High to Low</option>
                            <option value="Price: Low to High">Price: Low to High</option>
                        </select>
                    </div>
                    <div className="hr1"></div>
                </div>
                <div className="shop_card1">
                    {shopcard.map((iteam, index) => (
                        <div className="shopping" key={index}>
                            <div className="content">
                                <h1 className="like"><AiOutlineHeart /></h1>
                                <button className="carts">ADD TO CART <span><FaCartPlus /></span> </button>
                            </div>
                            <img src={iteam.rasm} alt="" />
                            <p>{iteam.nomi}</p>
                            <p>{iteam.narxi}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}