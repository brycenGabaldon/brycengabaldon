import React, { Children, useState} from 'react'


export const Card = (children) => {



  return (

    <div className='CardOuter'>
<div className='CardInner'></div>
<h1 className='CardTitle'>   TITLE GOES HERE               </h1>

<h1 className='CardDescrption'>
{Children}
DESCRPTION, BULLET POINTS, BUTTONS, PICTURES GO HERE

</h1>
    </div>
  )
}
