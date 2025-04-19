import React from 'react'
import zPin from '../assets/z-pin.svg'

interface MilestoneBarProps {
  points: number
  maxPoints?: number
  milestones?: number[]
}

//Custom milestone marker
const MilestoneBar: React.FC<MilestoneBarProps> = ({
  points,
  maxPoints = 2250, //max milestone for 2250 pts
  milestones = [0, 500, 1500, 1750, 2250],
}) => {
  const percent = Math.min(100, (points / maxPoints) * 100)

  return (
    <div className='relative mx-[8px] w-[95%]'>
      <div className='h-3 w-full rounded-full bg-[#d9eacb] relative'>
        <div
          className='absolute top-0 left-0 h-full bg-green-600 rounded-full'
          style={{ width: `${percent}%` }}
        ></div>

        {milestones.map((mark, index) => {
          const left = (mark / maxPoints) * 95
          return (
            <div
              key={index}
              className='absolute top-1/2 w-1 h-1 bg-white border border-black rounded-full'
              style={{ left: `calc(${left}% - (-10px))`, transform: 'translate(-50%, -50%)' }}
            ></div>
          )
        })}
      </div>

      <div className='absolute top-full left-0 w-full flex text-center justify-between mt-1 text-[12px] text-black font-regular'>
        {milestones.map((m, i) => (
          <span key={i} className='translate-x-[-50%]' style={{ position: 'absolute', left: `${(m / maxPoints) * 100}%` }}>{m}</span>
        ))}
      </div>
      
      {/* Milestone pointer for user points */}
      <div
        className='absolute bottom-[-5px] w-6 h-6 flex items-center justify-center rounded-full'
        style={{ left: `calc(${percent}% - 12px)` }}
      >
        <img src={zPin} alt='icon' />
      </div>
    </div>
  )
}

export default MilestoneBar
