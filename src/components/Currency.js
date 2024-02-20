import React from 'react';

const Currency = () => {
    return (
        <div className='alert alert-secondary'>
        <select className="custom-select" id="inputGroupSelect01" >
                <option defaultValue>Currency</option>
                <option value="Dollar" name="marketing">$ Dollar</option>
                <option value="Pound" name="sales">£ Pound</option>
                <option value="Euro" name="finance">€ Euro</option>
                <option value="Ruppee" name="hr">₹ Ruppee</option>
        </select>
        </div>
    );
};
export default Currency;
