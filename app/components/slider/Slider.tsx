'use client'

import './Slider.css'
import Image from 'next/image'

type SliderProps = {
  images: Array<any>
}

const Slider: React.FC<SliderProps> = ({images}) => {
  return (
    <div className="
        w-full
        h-[180px]
        bg-[#1a1a1a]
        border-t-[1px]
        border-b-[1px]
        border-gray-400
        border-opacity-10
        overflow-hidden
        flex
        items-center
    ">
      <div className="marquee-wrapper">
        <div className="marquee">
          <div className="marquee-group">
            {images.map((image) => <Image src={image} alt='' height={50} className='image'/>)}
          </div>
          <div className="marquee-group" aria-hidden='true'>
            {images.map((image) => <Image src={image} alt='' height={50} className='image'/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider