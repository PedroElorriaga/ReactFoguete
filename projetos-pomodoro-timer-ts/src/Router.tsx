import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Historic from './pages/Historic/index';
import DefaultLayout from './layouts/DefaultLayout/index';

export default function Router() {

    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/historic' element={<Historic />} />
            </Route>
        </Routes>
    )
}