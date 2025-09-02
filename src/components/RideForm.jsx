import { useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { HiCalendar } from 'react-icons/hi2'

const RideForm = () => {
  const lengths = ['Daily', 'Hourly', 'Distance']
  const [rideLength, setRideLength] = useState(lengths[0])

  const handleSetRide = length => {
    setRideLength(length)
  }

  const gotoFleet = () => {
    const el = document.querySelector('#fleets')
    el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
      <div
          className={
            'bg-gray-300/80 items-center p-4 backdrop-blur-xl flex flex-col lg:flex-row rounded-xl gap-y-8'
          }
      >
        {/* Container for the first column */}
        <div className='flex flex-col flex-1 gap-4'>
          <h3 className='font-medium p-2'>Pick-up</h3>
          <section className='flex flex-col sm:flex-row sm:justify-start gap-4 items-center'>
            <div className='relative w-full sm:w-auto'> {/* Add w-full for stacking */}
              <input
                  type='text'
                  placeholder='Choose Location'
                  className='pl-10 py-2 rounded-xl bg-light w-full' // Use w-full and move padding
              />
              <GoLocation size={18} className='absolute left-2 top-1/2 -translate-y-1/2' /> {/* Correct icon positioning */}
            </div>

            <div className='bg-light rounded-xl flex gap-x-2 p-2 items-center w-full sm:w-auto'> {/* Add w-full for stacking */}
              <HiCalendar strokeWidth={1.2} />
              <p>Oct 23,2025</p>
              <p>02:14 PM</p>
            </div>
          </section>

          <ul className='flex gap-2 p-2'>
            {lengths.map(leng => (
                <li
                    key={leng}
                    onClick={() => handleSetRide(leng)}
                    className={`px-2 py-1.5 rounded-xl transition-all duration-500  ${
                        leng === rideLength
                            ? 'bg-primary text-light'
                            : 'text-primary bg-light'
                    }`}
                >
                  {leng}
                </li>
            ))}
          </ul>
        </div>

        {/* Container for the second column */}
        <div className='flex flex-col flex-1 gap-4'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-2 '>
            <h3 className='font-medium p-2'>Return</h3>

            <div className='flex items-baseline gap-x-1'>
              <input
                  type='checkbox'
                  className='bg-transparent p-1 border border-primary'
              />
              <h3 className='text-sm p-2'>Same return location as pick-up</h3>
            </div>
          </div>

          <section className='flex flex-col sm:flex-row sm:justify-start gap-4 items-center'> {/* Use sm:justify-start */}
            <div className='relative w-full sm:w-auto'> {/* Add w-full for stacking */}
              <input
                  type='text'
                  placeholder='Choose Location'
                  className='pl-10 py-2 rounded-xl bg-light w-full' // Use w-full and move padding
              />
              <GoLocation size={18} className='absolute left-2 top-1/2 -translate-y-1/2' />
            </div>

            <div className='bg-light rounded-xl flex gap-x-2 p-2 items-center w-full sm:w-auto'> {/* Add w-full for stacking */}
              <HiCalendar strokeWidth={1.2} />
              <p>Dec 25,2025</p>
              <p>10:28 PM</p>
            </div>
          </section>

          <button onClick={gotoFleet} className='p-2 rounded-xl bg-primary text-light self-center sm:self-start w-fit lg:self-end'>
            Show Available Cars
          </button>
        </div>
      </div>
  )
}

export default RideForm