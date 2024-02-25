const TabItem = ( { tab, index, activeTab, setActiveTab }) => {
    return <button
        className={`deliveryZone ${index === activeTab ? "btn_tabs selected" : "btn_tabs"}`}
        value={index}
        onClick={() => setActiveTab(index)}>
            { tab }
    </button>
}

export default TabItem;