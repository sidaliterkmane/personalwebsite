import { Outfit } from 'next/font/google';
import './globals.css'

import Head from 'next/head';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/slider/Slider';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Hire from './components/hire/Hire';
import Footer from './components/Footer';

import * as techImages from './techImages'

const technologiesImages = [
  techImages.htmlImage, 
  techImages.cssImage, 
  techImages.jsImage, 
  techImages.tsImage,
  techImages.pythonImage, 
  techImages.javaImage, 
  techImages.reactImage, 
  techImages.nextImage,
  techImages.scssImage,
  techImages.tailwindImage,
  techImages.nodeImage,
  techImages.mongoImage, 
  techImages.gitImage,
  techImages.figmaImage
]

export const metadata = {
  title: 'Sid Ali Terkmane - Web Developer',
  description: 'Hi, my name is Sid Ali Terkmane, computer science student with a strong love for front-end development. Welcome to my personal website.',
}

const font = Outfit({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='../public/images/pp.jpg'/>
      </head>

      <body className={`
      ${font.className}
      bg-[#161616]
      `}>
        <div className="w-full flex items-center flex-col gap-[100px]">
          <Navbar />
          <Hero />
          <Slider images={technologiesImages}/>
          <About />
          <Projects />
          <Hire />
        </div>
        <Footer />
        {children}
      </body>
    </html>
  )
}
