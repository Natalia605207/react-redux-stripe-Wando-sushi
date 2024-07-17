import { useState } from "react";
import DeliveryTerms from "../Components/DeliveryTerms";
import Tabs from "../Components/Tabs/Tabs";
import TabInfo from "../Components/Tabs/TabInfo";
import AboutDelivery from "../Components/AboutDelivery";
import Footer from "../Components/Footer";
import { ScrollToTopBtn } from "../Components/ScrollToTopBtn";

const Delivery = () => {
    const [activeTab, setActiveTab] = useState(0);

    return(
        <section>
            <div className="container">
            <DeliveryTerms />
            <AboutDelivery />
            <div className='delivery-tabs'>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab === 0 && <TabInfo cost="$5" time="30 minutes" />}
                {activeTab === 1 && <TabInfo cost="$10" time="50 minutes" />}
                {activeTab === 2 && <TabInfo cost="$16" time="70 minutes" />}
            </div>     
            </div>
            <Footer />
            <ScrollToTopBtn />
    </section>)
}

export default Delivery;