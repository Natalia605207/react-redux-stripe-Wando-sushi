import TabItem from "./TabItem";
import './Tab.css';

const Tabs = ( {activeTab, setActiveTab} ) => {
    return <div className="all-tabs">
        {
            ['WITHIN CITY CENTER', '15 KM FROM CENTER', '25 KM FROM CENTER'].map((tab, index) => (
                <TabItem 
                key = {index}
                tab = {tab}
                index = {index}
                activeTab = {activeTab}
                setActiveTab = {setActiveTab}
                />
            ))
        }

    </div>
}

export default Tabs;