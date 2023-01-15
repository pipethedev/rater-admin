import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'

const SingleSong = () => {
  return (
      <div>
          <div className="flex items-center justify-between">
          <Header title='Song #12'subtitle='This song has 130 reviews' />

              <div className="flex items-center mt-10">
                  <Button title='Rate and Review' />
              </div>
          </div>
    </div>
  )
}

export default SingleSong
