import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import {Menu} from './components/Menu';
import {HomePage} from './components/HomePage';
import {BlogPage} from './components/BlogPage';
import {ProfilePage} from './components/ProfilePage';
import {BlogPost} from './components/BlogPost';

export default function App() {
  return (
    <div className="App">
      {/*provider de react-router-dom*/}
      <HashRouter>
        <Menu />
        {/*Parte dinamica de rutas*/}
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          {/* nested route */}
          <Route path='/blog' element={<BlogPage/>}>
            {/*ruta dinamica*/}
            <Route path=':slug' element={<BlogPost/>}/>
          </Route>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='*' element={<p>not found</p>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}