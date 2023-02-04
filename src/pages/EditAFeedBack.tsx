import React, {ChangeEvent, useEffect, useState} from 'react'
import Button from '../components/Button'
import { useEditFeedbackMutation } from '../features/auth/authApiSplice'
import { toast } from 'react-toastify'


const EditAFeedBack = ({ setStateBool, id }: any) => {

    const [comment, setComment] = useState<string>('')
    const [editFeedback, { isLoading, isSuccess  }] = useEditFeedbackMutation(id)
    useEffect(() => {
        if (isSuccess) {
            toast.success("Feedback Edited Successfully");
            setStateBool(false)
        }
    }, [isSuccess]);


    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (comment) {
                await editFeedback({
                    body: {
                        comment
                    },
                    id
                }
                ).unwrap()
                setComment("")
            }
        } catch (error: any) {
            toast.error(error?.data?.message)
        }

    }

    return (
        <>
            <div>
                <div className="flex flex-col max-w-md mx-auto my-auto rounded-md">
                    <div className="mb-8">
                        <h1 className="my-3 text-2xl font-semibold text-[#02123B]">Edit a Feedback on the Music</h1>

                        <div className='rounded-2xl border-dotted border-2 p-4'>Feedbacks must contain what is liked about the song, what is disliked and how it can be improved</div>
                    </div>

                    <div className="mb-8">
                        <p>What are your thoughts on the song?</p>
                    </div>
                    <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={HandleSubmit}>

                        <textarea value={comment} name="comment" onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setComment((e.target as HTMLTextAreaElement).value)}
                            className='outline-none focus:ring-blue-500 focus:border-blue-500 w-full rounded-2xl border-dotted border-2 p-4' style={{ height: '200px' }} placeholder="Write your song review here...">

                        </textarea>
                        <div className="space-y-2">
                            <div>
                                <Button
                                    loading={isLoading}
                                    className='w-full mt-5 bg-[#516CF5] -p-10' type='submit' title="Send Feedback" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditAFeedBack
