import React from 'react';
// import header, footer, navbar into Root

const Root = ({ children }) => (
    <div id="main" className="container-fluid">
        <h1>Root Component</h1>
        { children }
    </div>
);

export default Root;