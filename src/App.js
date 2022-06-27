import React, {Fragment} from 'react';
import Header from './components/Layout/Header';
import Chat from './components/Chat/Chat';


function App(){
    return(<Fragment>
        <Header/>
        <Chat></Chat>
    </Fragment>);
}

export default App;