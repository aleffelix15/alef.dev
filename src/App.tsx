import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Project } from './components/Project'
import { Education } from './components/Education'
import { AvatarProjectPuller } from './components/AvatarProjectPuller'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'
import { ScrollProgress } from './components/ScrollProgress'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5]">
      <CustomCursor />
      <ScrollProgress />
      {/* Grain texture overlay */}
      <div
        className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Education />
        <AvatarProjectPuller />
        <Project />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
