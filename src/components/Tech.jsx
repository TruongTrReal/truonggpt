import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <>
          <div className='flex flex-col flex-wrap justify-center items-center gap-1'>
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
            <h3>{technology.name}</h3>
          </div>
        </>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')