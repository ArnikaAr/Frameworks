import React from 'react';

function Header() {
    return(
        <header style={HeaderStyle}>
            <h1>Books</h1>
        </header>
    )
}

const HeaderStyle ={
    color: '#4682B4',
    textAlign: 'center',
    padding: '10px'
};
export default Header;