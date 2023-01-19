import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Button from '../components/Button'
import Input from '../components/Input'
import { useUpdatePricingMutation, useUploadMusicMutation } from '../features/auth/authApiSplice'

const EditMusicUpload = ({ price, setStateBool }: any) => {

    console.log(price?.id)

    const [postPrice, setPostPrice] = useState(price?.price)

    const [uploadMusic, { isLoading, isSuccess, }] = useUpdatePricingMutation(price?.id)
    useEffect(() => {
        if (isSuccess) {
            toast.success("Price Edited Successfully");
            setStateBool(false)
        }
    }, [isSuccess]);

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (price) {
                await uploadMusic({
                    price: postPrice
                }).unwrap()
                setPostPrice('')
            }
        } catch {
            toast.error("Failed Edit Price Please Try again")
        }

    }

    return (
        <div>
            <div className="flex flex-col max-w-md mx-auto my-auto rounded-md">
                <div className="mb-8">
                    <h1 className="my-3 text-4xl font-semibold"></h1>
                </div>

                <form onSubmit={HandleSubmit}>

                    <div className="my-10  p-4 rounded-2xl">
                        <Input label='Current Price (₦)' type='number'
                            className='w-full p-4 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
                            value={postPrice} onChange={(e: Event) => setPostPrice(e.target as HTMLInputElement).value} />
                    </div>
                    <div className="my-2 p-4 rounded-2xl text-center bg-[#FFF9F0]">
                        {/* <p className='text-[#FF9900] text-base font-semibold'>This Payment only covers for the audio uploaded</p> */}
                        {/* <p className='text-[#FF9900] text-base font-semibold'>{price?.description}</p> */}
                    </div>



                    <div className="space-y-12 ng-untouched ng-pristine ng-valid">
                        {/* <Input type="number" value={price?.price} onChange={(e: Event) => setComment((e.target as HTMLInputElement).value)}  /> */}
                        <div className=" flex items-center justify-between gap-4">


                        </div>
                        <div className="space-y-2">
                            <div>
                                <Button
                                    loading={isLoading}
                                    className='w-full mt-20 bg-[#516CF5] -p-10' type='submit' title="Save Changes" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditMusicUpload
