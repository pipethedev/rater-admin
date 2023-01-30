import React, { Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AssignPerson from '../assets/svg/AssignPerson'
import PlayMusicIcon from '../assets/svg/PlayMusicIcon'
import SelectArrow from '../assets/svg/SelectArrow'
import SelectAssignWorker from '../pages/SelectAssignWorker'
import Menu from './Menu'
import Modal from './Modal'

interface CardPlatListProps {
    title: string
    subtitle: string
    rate: string
    id?: string
    setStateBool?: Dispatch<SetStateAction<boolean>>
    assignWorkFunc?: any
    item?: any
    stateBool?: boolean
}
const CardPlatList = ({ title, subtitle, rate, id, setStateBool,stateBool, assignWorkFunc, item }: CardPlatListProps) => {

    const [hover, setHover] = useState<boolean>(true)

    const navigate = useNavigate()

    return (
        <>
            <div className={`my-3 cursor-pointer relative`}
                onMouseEnter={() => setHover(false)}
                onMouseLeave={() => setHover(true)}
                key={id} >
                {/* <CircleDots className={`${hover && 'hidden'} block z-50 absolute right-3 top-5`} onClick={() => null} /> */}
                <div className={`${hover && 'hidden'} block z-50 absolute right-3 top-5`}>
                    <Menu
                        // iconJsx={false}
                        className=''
                        items={[
                            { name: 'View Song', icon: <SelectArrow />, id: 1, onclick: () => navigate(`/songs/${id}`) },
                            { name: 'Assign to Worker', icon: <AssignPerson />, id: 1, onclick: () => assignWorkFunc(item) },
                        ]}
                    />
                </div>


                <div className="bg-[#F5F8FF] p-4 flex items-center justify-center my-2 rounded-xl py-10">
                    <PlayMusicIcon className='' />
                </div>

                <p className='text-xl font-semibold my-1'>{title}</p>
                <p className='text-[#666666] text-sm my-3 font-medium'>{subtitle}</p>
                <span className='bg-[#EBFFF9] px-4 py-2 text-[#00C288] font-semibold text-base rounded-full min-w-max'>{rate}</span>
            </div>

            {/* <Modal show={stateBool} closeModal={setStateBool}>
                <SelectAssignWorker {...{ setStateBool }}  {...{assignWorkFunc}} />
            </Modal> */}
        </>
    )
}

export default CardPlatList
