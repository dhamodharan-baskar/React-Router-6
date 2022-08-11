import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import io from 'socket.io-client';

// const apiKey = 'VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV';
// const channelId = 1;
// let socketIo;
// var ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id=1089');


function Hooks() {
  
  const [messages, setMessages] = useState([])

  const onClickStart = () => {
    // ws.send(JSON.stringify({
    //   "active_symbols": "brief",
    //   "product_type": "basic"
    // }));
//     ws.onopen = function(evt) {
//       ws.send(JSON.stringify({ticks:'R_100'}));
//   };
//   ws.onmessage = function(msg) {
//     var data = JSON.parse(msg.data);
//     console.log('ticks update: %o', data);
//  };
  }

  const initSocket = () => {
    // socketIo.onmessage = (data) => {
    //   console.log('coming')
    // };
  }

  const onClickSend = () => {
    // socketIo.send('damo')
  }

  const onClickEnd = () => {
    // socketIo.close();
  }

  return (
    <div className="App">
     <div onClick={onClickStart}>start socket</div>
     <div onClick={onClickSend}>send message socket</div>
     <div onClick={onClickEnd}>end socket</div>

     <div style={{maxHeight: 400, overflow: 'scroll'}}>

        {messages.map((item) => {
            return(
              <div key={item}>
                 {item}
              </div>
            )
        })}
     </div>
    </div>
  );
}

export default Hooks;