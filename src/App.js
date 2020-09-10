import React from 'react';

import socket from "./api/socket";
import JoinBlock from "./components/JoinBlock";

const App = () => {

    return (
        <div className="wrapper">
            <JoinBlock/>
        </div>
    );
};

export default App;
