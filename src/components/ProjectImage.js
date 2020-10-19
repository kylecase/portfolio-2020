import React from 'react'
import IncidentCommand from '../svg/IncidentCommand'
import Answers from '../svg/Answers'
import HiTech from '../svg/HiTech'
import TechAtTarget from '../svg/TechAtTarget'
import Podcasts from '../svg/Podcasts'
import Valuableslist from '../svg/Valuableslist'
import { motion } from 'framer-motion'
const ProjectImage = ({ image }) => {
  const getSVG = () => {
    switch (image) {
      case 'incident-command':
        return <IncidentCommand style={{ maxHeight: '130px' }} />
      case 'answers':
        return <Answers style={{ maxHeight: '130px' }} />
      case 'hi-tech':
        return <HiTech style={{ maxHeight: '130px' }} />
      case 'tech-at-target':
        return <TechAtTarget style={{ maxHeight: '130px' }} />
      case 'target-podcasts':
        return <Podcasts style={{ maxHeight: '150px' }} />
      case 'valuableslist':
        return (
          <Valuableslist
            style={{ maxHeight: '130px', marginBottom: '-30px' }}
            className="valuables-list-logo"
          />
        )
      default:
        return undefined
    }
  }

  return (
    <motion.div layoutId={image}>
      {image && image.includes('http') ? (
        <img src={image} alt={`${image}`} />
      ) : (
        getSVG()
      )}
    </motion.div>
  )
}

export default ProjectImage
