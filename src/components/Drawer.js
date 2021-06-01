import React,{useState} from 'react'
import "./styles/Drawer.css";
function Drawer({drawerOpen,setDrawerOpen,setTaskValue,setInputValue}) {
    const [list,setList] = useState(["Deletion","FindMin","FindMax"])
    return (
        <div style={{width:'100%' , marginTop:'4%', display:'flex', flexDirection:'column' ,justifyContent:'space-between',alignItems:'center'}}>
            {list.map((ls)=>(
                <div onClick={()=>{setDrawerOpen(!drawerOpen);setTaskValue(ls);}} key={ls} className="drawer-element" style={{color:'#2e2e2e',padding:'5px',marginBottom:'4px',border:'2px solid #2e2e2e',cursor:'pointer'}}>
                    {ls}
                </div>
            ))}
        </div>
    )
}

export default Drawer
