import React from 'react'

const Staertrating = ({rate,handlerate}) => {
const stars=(n) => {
    let star=[];
    for (let i = 1; i <=5; i++) {
        if (i<=n) {
          star.push(
              <span onClick={()=>handlerate(i)} style={{color:"gold" }} >
                  ★
              </span>
          )
        } else {
            star.push(
                <span onClick={()=>handlerate(i)} style={{color:"black" } }>
                    ★
                </span>
            )  
        }
        
    }
  return star;  
}

    return (
        <div>
            {stars(rate)}
        </div>
    )
}
Staertrating.defaultProps={
    rate:1,
    handlerate:() => {
        
    }
}
export default Staertrating
