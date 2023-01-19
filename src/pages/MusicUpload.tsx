import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../components/Button'
import Input from '../components/Input';
import { useUploadMusicMutation } from '../features/auth/authApiSplice';
import { formatKoboAmountForDisplay } from '../utils/currency';

const MusicUpload = ({ setStateBool, price, setStep }: any) => {
  // const { id } = useParams()
  // console.log(price, 'idsss')
  const [audio, setAudio] = useState()
  const [postPrice, setPostPrice] = useState(price?.price)

  const [uploadMusic, { isLoading, isSuccess, }] = useUploadMusicMutation(price?.id)

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Uploaded Music Successfully");
  //     setStateBool(false)
  //   }
  // }, [isSuccess]);



  const HandleSubmit = () => {
    setStateBool(false)
    setStep(true)
  }
  // const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     if (audio) {
  //       await uploadMusic({
  //         // audio,
  //         price: postPrice
  //       }).unwrap()
  //       // setAudio('')
  //       setPostPrice('')
  //     }
  //   } catch {
  //     toast.error("Failed Upload Music Please Try again")
  //   }

  // }
  return (
    <>
      <div>
        <div className="flex flex-col max-w-md mx-auto my-auto rounded-md">
          <div className="mb-8">
            <h1 className="my-3 text-4xl font-semibold"></h1>
          </div>

          <div className="my-10 bg-[#F5F8FF] p-4 rounded-2xl text-center">
            <p className='text-lg my-2'>Current Price</p>
            <p className="font-semibold text-5xl">{formatKoboAmountForDisplay(price?.price)}</p>
          </div>
          <div className="my-2 p-4 rounded-2xl text-center bg-[#FFF9F0]">
            <p className='text-[#FF9900] text-base font-semibold'>{price?.description}</p>
          </div>



          <div className="space-y-12 ng-untouched ng-pristine ng-valid" >
            <div className=" flex items-center justify-between gap-4">


            </div>
            <div className="space-y-2">
              <div>
                <Button
                  loading={isLoading}
                  onClick={HandleSubmit}
                  className='w-full mt-20 bg-[#516CF5] -p-10' type='submit' title="Update Price" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicUpload
