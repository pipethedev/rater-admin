import React from 'react'

const WorkersReviews = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        {Array(8).fill('').map((item) => (
          <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md border border-[#E2EAFE]">
            <div className="flex space-x-4">
              <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow" />
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-base font-semibold">David Muritala</a>
                <span className="text-sm">Today — 9:48PM</span>
              </div>
            </div>

            <div>
              <span className=' bg-[#EBFFF9] px-4 py-2 text-[#00C288] font-semibold text-base rounded-full min-w-max'>Good</span>
              <p className='text-lg mt-5'>This is a classic rock song that has stood the test of time. With its iconic opening guitar riff and operatic vocals, this song is truly one-of-a-kind.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkersReviews
