import React from 'react';

export const ComponentesEstilizados = ({ sendTabs, sendActualTab }) => {




    const handleClick = (e) => {
        const clickActualTab = e.target.id;
        sendActualTab (clickActualTab);
        // console.log(sendActualTab);        
    }



    const createTab = (value, key) => {
        // console.log(value);
        return (
            <>
                <li className="nav-item" key={key}>
                    <button onClick={(e) => handleClick(e)} id={value} className="nav-link active">{value}</button>
                </li>
            </>

        )


    }



    return (
        <>
            {sendTabs.map((item, index) => createTab(item, index))}
        </>


    );
};
