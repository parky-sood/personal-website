import linkedin from './linkedin.svg';
import github from './github.svg'

import './App.css';

function App() {
  return (
    <div className='App'>
      {navbar()}
    </div>
  );
}

function navbar() {
  return (
      <nav className='navbar'>
        <ul className='primary-nav'>
          <li className='prim-nav-item'>Home</li>
          <li className='prim-nav-item'>Projects</li>
          <li className='prim-nav-item'>About Me</li>
          <li className='prim-nav-item'>Contact</li>
        </ul>
        <ul className='secondary-nav'>
          <li className='sec-nav-item'>
            <a className = 'LinkedIn'
               href='https://www.linkedin.com/in/parikshit-sood'
               target='_blank'>
               <img src={linkedin} className='linkedin-logo' alt='linkedin'/>
            </a>
          </li>
          <li className='sec-nav-item'>
            <a className='GitHub'
               href='https://github.com/parky-sood'
               target='_blank'>
               <img src={github} className='github-logo' alt='github'/>
            </a>
          </li>
        </ul>
      </nav>
  );
}

function home() {

}

function projects() {

}

function about() {

}

function contact() {

}

export default App;
