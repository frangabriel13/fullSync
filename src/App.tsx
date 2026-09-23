import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import Hero from './sections/Hero/Hero'
import Solutions from './sections/Solutions/Solutions'
import WhyUs from './sections/WhyUs/WhyUs'
import About from './sections/About/About'
import Clients from './sections/Clients/Clients'
import Faq from './sections/Faq/Faq'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <WhyUs />
        <About />
        <Clients />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
