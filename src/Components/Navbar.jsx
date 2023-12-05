import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", position: "sticky", bottom: "10px", backgroundColor:"black",padding:"30px 0px" }}>
            <Link to={"/dashboard"}><div style={{color:"white",fontWeight:"bold",fontSize:'26px'}}>Raise Doubt</div></Link>
            <Link to={"/history"}><div  style={{color:"white",fontWeight:"bold",fontSize:'26px'}}>History</div></Link>
            <Link to={"/profile"}><div  style={{color:"white",fontWeight:"bold",fontSize:'26px'}}>Profile Section</div></Link>
        </div>
    )
}

export default Navbar