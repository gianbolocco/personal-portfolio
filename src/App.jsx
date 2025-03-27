import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import FloatingSocials from './components/FloatingSocials'


function App() {

  return (
    <div>
      <ThemeProvider>
        <FloatingSocials/>
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
