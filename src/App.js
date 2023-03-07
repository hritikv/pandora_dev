import React from 'react'
import { Button } from './stories/Button'
const App = () => {
  return (
    <div style={{textAlign:"center", marginTop:"20px", }}>
      <Button size="small " label="ADD NEW MAPPING"  sx={{borderRadius: '6px', backgroundColor: 'black' ,padding:"12px 16px"}}/>
      <Button size="small " label="Active" sx={{borderRadius: '15px', backgroundColor: 'green' ,}}/>
    </div>
  )
}

export default App