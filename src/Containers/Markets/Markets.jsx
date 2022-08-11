import React, { useEffect, useState, useCallback } from 'react';
import Select from 'react-select';

var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089');


function Markets() {
  const [activeSymbols , setActiveSymbols] = useState([])
  const [markets , setMarkets] = useState([])
  const [selectedMarket , setSelectedMarket] = useState(null)
  const [assets , setAssets] = useState([])
  const [selectedAsset , setSelectedAsset] = useState(null)
  const [price , setPrice] = useState()
  let inputStyle = {
    width: '100%',
    height: '36px',
    border: '1px solid #d8d8d8',
    margin: '8px 0px'
  }

  useEffect(() => {
    onGetMarkets()
  },[])

  const onGetMarkets = () => {
    ws.onopen = () => {
      ws.send(JSON.stringify({
        "active_symbols": "brief",
        "product_type": "basic"
      }));
  };

  ws.onmessage = async (res) =>  {
     var data = JSON.parse(res.data)
     let marketList = await data.active_symbols.filter((a, i) => data.active_symbols.findIndex((s) => a.market_display_name === s.market_display_name) === i)
     await setActiveSymbols(data.active_symbols)
     await setMarkets(marketList)
  };
  }

  const onSelectMarket = useCallback(async (value) => {
    setSelectedMarket(value)
    onGetAssets(value)
    setSelectedAsset(null)
  }, [selectedMarket])

  const onGetAssets = useCallback(async (value) => {
    let assetList = activeSymbols.filter((a) =>  a.market_display_name === value.market_display_name)
    setAssets(assetList)
  },[assets])

  const onSelectAsset = useCallback((value) => {
    setSelectedAsset(value)
    onSubscribeTicks(value)
  },[selectedAsset])

  const onSubscribeTicks = (value) => {
    ws.send(JSON.stringify({ticks:value.symbol}));
    ws.onmessage = async (res) =>  {
      let data = await JSON.parse(res.data)
      if(parseFloat(price) < parseFloat(data?.tick?.quote)){
        document.getElementById('inputElement').style.color = 'red'
      } else {
        document.getElementById('inputElement').style.color = 'green'
      }
      setPrice(data?.tick?.quote)
    };
  }

  return (
    <div style={{margin: 12}}>
      <div>Select Market</div>
      <Select
        value={selectedMarket}
        options={markets}
        onChange={(value) => onSelectMarket(value)}
        getOptionLabel={(markets) => markets['market_display_name']}
        getOptionValue={(markets) => markets['market_display_name']}
        placeholder={'Select Market'}
        />
       <div>Select Asset</div>
      <Select
        value={selectedAsset}
        options={assets}
        onChange={(value) => onSelectAsset(value)}
        getOptionLabel={(assets) => assets['display_name']}
        getOptionValue={(assets) => assets['display_name']}
        placeholder={'Select Assets'}
        isDisabled={!selectedMarket}
        />
        <div>
          <div>Price</div>
          <input 
            readOnly
            id="inputElement"
            value={price} 
            style={inputStyle}/>
        </div>
    </div>
  );
}

export default Markets;