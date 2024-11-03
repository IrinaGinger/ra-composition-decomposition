import Header from './components/MainComponents/Header/header'; 
import Main from './components/MainComponents/Main/main'; 
import Footer from './components/MainComponents/Footer/footer'; 

import './App.css'

function App() {
  

  return (
    <div className='App'>
      <header className="header-container">
        <Header />
      </header>

      <main className="main-container">
        <Main />
      </main>
      
      <footer className="footer-container">
        <Footer />
      </footer>      
    </div>
  )
}

export default App;
