const ISOFormateDate = (simpleDate) => {
    const date = new Date(simpleDate)
    const isoDate = date.toISOString()
    console.log(isoDate)
    return isoDate
}

export default ISOFormateDate