import { Authenticator } from '@aws-amplify/ui-react';
import React, { useState } from 'react';

//Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';



//Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
    const [signout, setSignout] = useState(() => { });
    
    return (
        <Router>
            <Header signOutMethod = {signout}/>
            <Routes>
                <Authenticator>
                    {({ signOut, user }) => {
                        setSignout(signOut);
                        console.log(user);
                        return (
                            <div>
                                <Route path='/' element={<Home />} />
                                <Route path='/:movieId' element={<Movie />} />
                                <Route path='/*' element={<NotFound />} />
                            </div>
                        )
                    }}
                </Authenticator>
            </Routes>
            <GlobalStyle />
        </Router>
    );
};

export default App;
