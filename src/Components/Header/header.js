import React from 'react';

const Header=()=>{
  const headerOne="Hello";
  const headerTwo="Deebits software solution";
    return(
        <div className="Header">
                  <h1 style={{alignItems:"center",textAlign:"center"}}>{headerOne} </h1>
                  <h3 style={{textAlign:"center"}}>{headerTwo}</h3>

        </div>
    );
}

export default Header;