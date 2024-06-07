import { FunctionComponent } from "preact";
import Logout from "../islands/Logout.tsx";

const Menu: FunctionComponent=() => {
    return(
        <div class="header-container">
            <Logout/>
            
        </div>
    )
};
export default Menu;