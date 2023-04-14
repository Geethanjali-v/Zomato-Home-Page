import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Home } from "./Home";

export const Routing = () => {
    return (
    <BrowserRouter>
    <div>
        <Header/>
<Route exact path="/" component={Home} />
        <Footer/>
    </div>
    </BrowserRouter>
    );
    };
    
//   export default Routing; 