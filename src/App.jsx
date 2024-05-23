import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { Panel } from './components/panel'

function App() {
 
  return (
    
    <div className='pageHome' >
      <header className='topo'>
        <input id='searchTopo'/>
        <img src='./src/assets/logoachei.png' />
      </header>
      <div id="contentUser">
        <div id='areaCart'>
          <Card 
            imagecard="./src/assets/image4.png" 
            title="Camisa Feminina" 
            description="Camisa feminina branca."
            price="R$ 180,00"
            condicion="em até 10x sem juros"
            />
          <Card 
             imagecard="./src/assets/image4.png" 
             title="Camisa Feminina" 
             description="Camisa feminina branca."
             price="R$ 180,00"
             condicion="em até 10x sem juros"
            />
          <Card
             imagecard="./src/assets/image4.png" 
             title="Camisa Feminina" 
             description="Camisa feminina branca."
             price="R$ 180,00"
             condicion="em até 10x sem juros"
             />
        </div>
      </div>
    <Panel />  
    <footer>
      <text>
        O uso deste site esta esta sujeito aos termos e condições do Termo de Uso e Politica de Privacidade
      </text>
    </footer>
    </div>
    
  )
}

export default App
