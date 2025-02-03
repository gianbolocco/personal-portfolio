import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'


function App() {

  return (
    <div>
      <ThemeProvider>
        <Intro/>
        <Portfolio/>
        <Timeline/>
        <Contact/>
        <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default App
