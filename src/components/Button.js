import './Button.module.css'
import React, { useState } from 'react';
import styles from './Button.module.css';



const Button = () =>{

    const [isClicked,setIsClicked] = useState('1rem');
    const [isDBClicked,setIsDBClicked] = useState('10rem');
    const clickHandler = (event) =>{
        console.log(event);
        let newC = isClicked.replace(/\D/g, "");
        newC = Number(newC)+1;
        newC = newC.toString();
        newC = newC.concat('rem');
        setIsClicked(newC);
       
    }

    const doubleClickHandler = () =>{
        let newD = isDBClicked.replace(/\D/g, "");
        newD = Number(newD)-1;
        newD = newD.toString();
        newD = newD.concat('rem');
        setIsDBClicked(newD);
        
    }

    
 
    return(
        <div>
            <button 
                className={`${styles['button']}`} 
                style={{padding:isClicked,backgroundColor:'#173ee9'}}
                onClick={clickHandler}
                > 
                    Click {isClicked}
            </button>
            <button 
            className={`${styles['button']}`} 
            style={{padding:isDBClicked,backgroundColor:'#970e0e'}}
            onDoubleClick={doubleClickHandler}
            > 
                DoubleClick {isDBClicked}
            </button>
        </div>
 
        

    );
};

export default Button;