import React from 'react';
import ReactDom from 'react-dom';


const MODAL_STYLES = {
  positon: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}

export default function ModalPortal({ open, children, childToParent}) {

if(open) return null
console.log(open)
  return ReactDom.createPortal(
    <>
    <div className='Overlay' style={MODAL_STYLES} onClick={()=>childToParent(open)}>
        {children}
    </div>
    </>
    ,
    document.getElementById('portal')
  )
}


