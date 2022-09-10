import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './containers/App';
import Home from './containers/Home';
import Country from './containers/Country';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="" element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="country/:code" element={<Country/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;