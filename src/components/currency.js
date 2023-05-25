import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert' style={{ backgroundColor: 'lightgreen', color:'white' }}> Currency ({
      <select name="Currency"  style={{ backgroundColor: 'lightgreen' , color:'white', border: 'none' }} id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="£">$ Dollar</option>
        <option value="₹">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="CAD">₹ Rupee</option>
      </select>	
      })
    </div>
    );
};

export default currency;