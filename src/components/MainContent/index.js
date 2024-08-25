import { FaAirFreshener } from "react-icons/fa";
import { FaAffiliatetheme } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

function MainContent() {
    let name = "Mỹ Khánh";
    const css = {
        // color: "red",
        // backgroundColor: "yellow"
    };
    return (
        <>
            <div className="box">
                <div className="test" style={css}>
                    Xin chào {name}!
                </div>

                <div className="test" style={css}>
                    Xin chào {name}!
                </div>
                <FaAirFreshener style ={{fontSize: "50px"}}/>
                <FaAffiliatetheme className="icon"/>
                <FaBook />
            </div>
        </>
    )
}

export default MainContent;