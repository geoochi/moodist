import { BiSolidCoffeeAlt, BiSolidPlaneAlt, BiSolidDryer } from 'react-icons/bi'
import { FaChurch, FaSubway, FaShoppingBasket } from 'react-icons/fa'
import { TbScubaMask, TbBeerFilled } from 'react-icons/tb'
import { GiVillage, GiCarousel } from 'react-icons/gi'
import { MdTempleBuddhist, MdConstruction, MdLocationPin } from 'react-icons/md'
import { HiOfficeBuilding } from 'react-icons/hi'
import { AiFillExperiment } from 'react-icons/ai'

import type { Category } from '../types'

export const places: Category = {
  icon: <MdLocationPin />,
  id: 'places',
  sounds: [
    {
      icon: <BiSolidCoffeeAlt />,
      id: 'cafe',
      label: 'Cafe',
      src: './sounds/places/cafe.mp3',
    },
    {
      icon: <BiSolidPlaneAlt />,
      id: 'airport',
      label: 'Airport',
      src: './sounds/places/airport.mp3',
    },
    {
      icon: <FaChurch />,
      id: 'church',
      label: 'Church',
      src: './sounds/places/church.mp3',
    },
    {
      icon: <MdTempleBuddhist />,
      id: 'temple',
      label: 'Temple',
      src: './sounds/places/temple.mp3',
    },
    {
      icon: <MdConstruction />,
      id: 'construction-site',
      label: 'Construction Site',
      src: './sounds/places/construction-site.mp3',
    },
    {
      icon: <TbScubaMask />,
      id: 'underwater',
      label: 'Underwater',
      src: './sounds/places/underwater.mp3',
    },
    {
      icon: <TbBeerFilled />,
      id: 'crowded-bar',
      label: 'Crowded Bar',
      src: './sounds/places/crowded-bar.mp3',
    },
    {
      icon: <GiVillage />,
      id: 'night-village',
      label: 'Night Village',
      src: './sounds/places/night-village.mp3',
    },
    {
      icon: <FaSubway />,
      id: 'subway-station',
      label: 'Subway Station',
      src: './sounds/places/subway-station.mp3',
    },
    {
      icon: <HiOfficeBuilding />,
      id: 'office',
      label: 'Office',
      src: './sounds/places/office.mp3',
    },
    {
      icon: <FaShoppingBasket />,
      id: 'supermarket',
      label: 'Supermarket',
      src: './sounds/places/supermarket.mp3',
    },
    {
      icon: <GiCarousel />,
      id: 'carousel',
      label: 'Carousel',
      src: './sounds/places/carousel.mp3',
    },
    {
      icon: <AiFillExperiment />,
      id: 'laboratory',
      label: 'Laboratory',
      src: './sounds/places/laboratory.mp3',
    },
    {
      icon: <BiSolidDryer />,
      id: 'laundry-room',
      label: 'Laundry Room',
      src: './sounds/places/laundry-room.mp3',
    },
  ],
  title: 'Places',
}
