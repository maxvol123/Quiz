import React, { useState } from 'react';
import { Finish } from './components/finish';
import { Game } from './components/game';
import { game_elements } from './components/game_elements';
import { Main } from './components/main';
import { Start } from './components/start';
function App() {
  const [game, setGame] = useState(false)
  const [home, setHome] = useState(true)
  const [startgame, setStartgame]=useState(false)
  const [curentquestion, setCurentquestion]=useState(0)
  const [finish, setFinish]=useState(false)
  const [point, setPoint]=useState(0)
  const [ar,setAr]=useState("")
    if (startgame===true) {
      if (curentquestion + 1 > ar.length) {
        setStartgame(false)
        setFinish(true)
        setCurentquestion(0)
      }  
    }
  console.log(point);
  console.log(ar);
  
  return (
    <div className="App">
      <nav className='flex justify-center space-x-28 cursor-pointer sticky top-0'>
        <div className="" onClick={()=>{setGame(false); setHome(true); setStartgame(false);setFinish(false);setPoint(0)}}>Home</div>
        <div className="" onClick={()=>{setGame(true); setHome(false); setStartgame(false);setFinish(false);setPoint(0)}}>Games</div>
      </nav>
      {home&&<Main/>}
      <div className="flex justify-center flex-row mt-10 flex-wrap">
      {game&&game_elements.map(product=><Game setAr={setAr} StartG={()=>{setStartgame(true); setGame(false)}} element={product} key={product.id}/>)}
      {startgame&&<Start point={point} setPoint={setPoint} AddPoint={()=>setCurentquestion(curentquestion+1)} curentquestion={curentquestion} element={ar}/>}
      {finish&&<Finish point={point}/>}
      </div> 
    </div>
  );
}

export default App;
