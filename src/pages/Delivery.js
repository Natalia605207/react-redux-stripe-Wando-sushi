import { useState } from "react";
import DeliveryTerms from "../Components/DeliveryTerms";
import Tabs from "../Components/Tabs/Tabs";
import TabInfoOne from "../Components/Tabs/TabInfoOne";
import TabInfoTwo from "../Components/Tabs/TabInfoTwo";
import TabInfoThree from "../Components/Tabs/TabInfoThree";
import AboutDelivery from "../Components/AboutDelivery";
import Footer from "../Components/Footer";

const Delivery = () => {
    const [activeTab, setActiveTab] = useState(0);

    return(
        <div>
            <div className="container">
            <DeliveryTerms />
            <AboutDelivery />
            <div className='delivery-tabs'>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === 0 && <TabInfoOne/>}
                {activeTab === 1 && <TabInfoTwo/>}
                {activeTab === 2 && <TabInfoThree/>}
            </div>     
            </div>
            <Footer />
    </div>)
}

export default Delivery;