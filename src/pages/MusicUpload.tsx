import React from 'react'
import Button from '../components/Button'

const MusicUpload = ({ setStateBool }: any) => {
  return (
      <>
           <div>
            <div className="flex flex-col max-w-md mx-auto my-auto rounded-md  dark:bg-gray-900 dark:text-gray-100">
                <div className="mb-8">
                    <h1 className="my-3 text-4xl font-semibold"></h1>
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
