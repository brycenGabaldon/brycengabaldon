
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const NavButtonContents = ({navButton, HandleNavButton, ChangeNavButton, recipe, toggleBartending}) => {
const navigate = useNavigate()
    const [buttonOpen, setButtonOpen] = useState(false)
    const [buttonOpen2, setButtonOpen2] = useState(false)
    const [buttonOpen3, setButtonOpen3] = useState(false)
    const [buttonOpen4, setButtonOpen4] = useState(false)
    const [bartending, setBartending] = useState(false)

const handleButtonToggle1 = () => {
setButtonOpen(!buttonOpen)
setButtonOpen2(false)
setButtonOpen3(false)
setButtonOpen4(false)
}
const handleButtonToggle2 = () => {
    setButtonOpen(false)
    setButtonOpen2(!buttonOpen2)
    setButtonOpen3(false)
    setButtonOpen4(false)
    }
    const handleButtonToggle3 = () => {
        setButtonOpen(false)
        setButtonOpen2(false)
        setButtonOpen3(!buttonOpen3)
        setButtonOpen4(false)
        }
        const handleButtonToggle4 = () => {
            setButtonOpen(false)
            setButtonOpen2(false)
            setButtonOpen3(false)
            setButtonOpen4(!buttonOpen4)
            }
const handlePageChange = (page) => {
    try{ 
    ChangeNavButton(false);

   navigate('/bartending/house')

    }
    catch{
        console.error();
    }
}
    return (
        <div className={!navButton ? 'NavButtonContents': "NavButtonContentsClosed"}>
            <div className='BarCloseNav' onClick={HandleNavButton}>x</div>
            <div className={buttonOpen ? 'BarMenuButton2': buttonOpen2||buttonOpen3|| buttonOpen4 ? 'BarMenuButton3': 'BarMenuButton BarButton1'} onClick={()=> handleButtonToggle1()}>
                <img style={{objectFit: 'cover', height:'100%', width:'100%', borderRadius: '5px'}}  src="https://www.thespruceeats.com/thmb/MmDghXG76LQVYRsTEtjW3frzgbg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bar101-cocktails-504754220-580e83415f9b58564cf470b9.jpg" alt="" />                <div className='ButtonButtonBottles1'><span style={{width: 'inherit', position: "absolute",background: 'rgba(0,0,0,.3', color:'white'}}>Recipes</span>
                {buttonOpen && <div className='ButtonButtonBottles1a'><div className={buttonOpen &&'ButtonButtonBottles2'} onClick={()=>handlePageChange()}>House</div>
                    <div className={buttonOpen &&'ButtonButtonBottles2'}>Outside</div>
                    <div className={buttonOpen &&'ButtonButtonBottles2'}>Edit House</div>
                    <div className={buttonOpen &&'ButtonButtonBottles2'}>Edit Outside</div> </div>}
                    
                </div></div>

            <div className={buttonOpen2 ? 'BarMenuButton2': buttonOpen||buttonOpen3|| buttonOpen4 ? 'BarMenuButton3': 'BarMenuButton'} onClick={()=> handleButtonToggle2()}>
            <img style={{objectFit: 'cover', height:'100%', width:'100%', borderRadius: '5px'}}  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/booze-hound-1607116758.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*" alt="" />
                <div className='ButtonButtonBottles1'><span style={{width: 'inherit', position: "absolute",background: 'rgba(0,0,0,.3', color:'white'}}>Bottles</span>
                {buttonOpen2 && <div className='ButtonButtonBottles1a'><div className={buttonOpen2 &&'ButtonButtonBottles2'}>View Inventory</div>
                    <div className={buttonOpen2 &&'ButtonButtonBottles2'}>View Locations</div>
                    <div className={buttonOpen2 &&'ButtonButtonBottles2'}>Edit Inventory</div>
                    <div className={buttonOpen2 &&'ButtonButtonBottles2'}>Edit Locations</div></div>}
                    
                </div>
                
            
               
            </div>
            <div className={buttonOpen3 ? 'BarMenuButton2': buttonOpen2||buttonOpen|| buttonOpen4 ? 'BarMenuButton3': 'BarMenuButton'} onClick={()=> handleButtonToggle3()}>

            <img style={{objectFit: 'cover', height:'100%', width:'100%', borderRadius: '5px'}}  src="https://web-dev.imgix.net/image/HodOHWjMnbNw56hvNASHWSgZyAf2/PRyD1Ad1GtT6IZLqWtu1.svg" alt="" /><div className='ButtonButtonBottles1'><span style={{width: 'inherit', position: "absolute",background: 'rgba(0,0,0,.3', color:'white'}}>Layout</span>
            {buttonOpen3 && <div className='ButtonButtonBottles1a'><div className={buttonOpen3 &&'ButtonButtonBottles2'}></div>
                    <div className={buttonOpen3 &&'ButtonButtonBottles2'}></div>
                    <div className={buttonOpen3 &&'ButtonButtonBottles2'}></div>
                    <div className={buttonOpen3 &&'ButtonButtonBottles2'}></div> </div>}
                    
                </div>
                
            </div>
            <div className={buttonOpen4 ? 'BarMenuButton2': buttonOpen2||buttonOpen3|| buttonOpen ? 'BarMenuButton3': 'BarMenuButton'} onClick={()=> handleButtonToggle4()}>

            <img style={{objectFit: 'cover', height:'100%', width:'100%', borderRadius: '5px'}}  src="https://www.thespruceeats.com/thmb/MmDghXG76LQVYRsTEtjW3frzgbg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bar101-cocktails-504754220-580e83415f9b58564cf470b9.jpg" alt="" /><div className='ButtonButtonBottles1'><span style={{width: 'inherit', position: "absolute", background: 'rgba(0,0,0,.3', color:'white'}}></span>
            {buttonOpen4 && <div className='ButtonButtonBottles1a'><div className={buttonOpen4 &&'ButtonButtonBottles2'}></div>
                    <div className={buttonOpen4 &&'ButtonButtonBottles2'}></div>
                    <div className={buttonOpen4 &&'ButtonButtonBottles2'}></div>
                    <div className={buttonOpen4 &&'ButtonButtonBottles2'}></div> </div> }
                    
                </div>
            </div>

        </div>
    );
};

export default NavButtonContents;