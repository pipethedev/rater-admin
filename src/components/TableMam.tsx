import React from 'react'
import DownloadIcon from '../assets/svg/DownloadIcon'

const dataDummy = [
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Ubah Ikechukwu Dominion',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
    {
        recipent: 'Adimora Augustine AUgustine',
        date: '12 / 12 / 2022',
        description: 'Sound Upload — I_don_manya.mp3',
        amount: '₦3,500.00',
        action: ''
    },
]

const TableMam = () => {
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                {/* <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2> */}
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        {/* <colgroup>
				<col>
				<col>
				<col>
				<col>
				<col>
				<col className="w-24">
			</colgroup> */}
                        <thead className="dark:bg-gray-700 bg-[#F5F8FF]">
                            <tr className="text-left">
                                <th className="p-3">DATE</th>
                                <th className="p-3">RECIPENT</th>
                                <th className="p-3">DESCRIPTION</th>
                                <th className="p-3">AMOUNT</th>
                                <th className="p-3 text-right">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataDummy.map(item => (
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                    <td className="p-3 text-sm">
                                        <p>{item.date}</p>
                                    </td>
                                    <td className="p-3 text-sm">
                                        <p>{item?.recipent}</p>
                                    </td>
                                    <td className="p-3 text-sm">
                                        <p>{item?.description}</p>
                                    </td>
                                    <td className="p-3 text-sm">
                                        <p>{item?.amount}</p>
                                    </td>

                                    <td className="p-3 text-sm text-right flex items-center justify-end">
                                        <span className="py-1 font-semibold text-right">
                                            {/* <span>Pending</span> */}
                                            <DownloadIcon className='text-right' />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableMam



