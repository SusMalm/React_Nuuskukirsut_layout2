import React from 'react'
 
const Content = (props) => {
  
   
    return (
        <main>
            <div id="card">
                <h2>{props.title}</h2>
            
                <img src={props.pic} alt={props.title} ></img>
            </div>
            
        </main>
    )
}
 
export default Content;




