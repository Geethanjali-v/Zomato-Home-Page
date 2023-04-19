import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Home } from "./components/Home/Home";
import { ListingApi } from "./components/Listing/ListingApi";
import {Details} from "./components/Details/Details";
import PlaceOrder from "./components/Booking/PlaceOrder";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ViewOrder from "./components/Booking/ViewOrder";
export const Routing = () => {
    return (
    <BrowserRouter>
    <div>
        <Header/>
<Route exact path="/" component={Home} />
<Route path="/listing/:mealId" component={ListingApi} />
<Route path="/details" component={Details} />
<Route path="/placeOrder/:restName" component={PlaceOrder} />
        <Route path="/viewBooking" component={ViewOrder} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer/>
    </div>
    </BrowserRouter>
    );
    };
    
//   export default Routing; 