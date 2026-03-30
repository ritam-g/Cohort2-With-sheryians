import React from 'react'

function Card({ details }) {
    return (
        <main>
            {details.map((detail,index)=>{
                return(
                    <div key={index} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
                        <h2>{detail.name}</h2>
                        <p>Age: {detail.age}</p>
                        <p>Occupation: {detail.occupation}</p>
                    </div>
                )
            })}
        </main>
    )
}

export default Card
