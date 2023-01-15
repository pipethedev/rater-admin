import React from 'react'
import Button from '../components/Button'

const MusicUpload = ({ setStateBool }: any) => {
  return (
      <>
           <div>
            <div className="flex flex-col max-w-md mx-auto my-auto rounded-md">
                <div className="mb-8">
                    <h1 className="my-3 text-4xl font-semibold"></h1>
                  </div>

                  <div className="my-10 bg-[#F5F8FF] p-4 rounded-2xl text-center">
                      <p className='text-lg my-2'>Current Price</p>
                      <p className="font-semibold text-5xl">₦25,000.00</p>
                  </div>
                  <div className="my-2 p-4 rounded-2xl text-center bg-[#FFF9F0]">
                      <p className='text-[#FF9900] text-base font-semibold'>This Payment only covers for the audio uploaded</p>
                  </div>


                <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={() => null}>
                    <div className=" flex items-center justify-between gap-4">


                    </div>
                    <div className="space-y-2">
                        <div>
                              <Button
                                //   loading={isLoading}
                                  className='w-full mt-20 bg-[#516CF5] -p-10' type='submit' title="Update Price" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </>
  )
}

export default MusicUpload
