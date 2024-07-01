const TabInfo = ({cost, time}) => {
    return <div className="tab-info">
        <p className="tab-content">Delivery cost: <span className="grey">{cost}</span></p>
        <br/>
        <p className="tab-content">Delivery time: <span className="grey">{time}</span></p>
    </div>
}

export default TabInfo;