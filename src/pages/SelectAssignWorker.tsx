import React, { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

const SelectAssignWorker = ({ setStateBool }: any) => {
    const [search, setSearch] = useState<string>("")

  return (
    <div>
    <div className="flex flex-col max-w-md mx-auto my-auto rounded-md">
        <div className="mb-8">
            <h1 className="my-3 text-4xl font-semibold">Select Worker to assign song to</h1>
        </div>
        <form className="space-y-12 ng-untouched ng-pristine ng-valid" onSubmit={() => null}>
            <div className=" flex items-center justify-between gap-4">
            <Input
                    className="w-full lg:w-96 p-4 pl-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    divStyle=''
                    placeholder="Search songs by title or Artiste’s name'"
                    searchIcon
                    type="search"
                    value={search}
                    onChange={(e: Event) => setSearch((e.target as HTMLInputElement).value)}
                />

            </div>
            <div className="space-y-4">



            </div>
            <div className="space-y-2">
                <div>
                    <Button className='w-full mt-20 bg-[#516CF5] -p-10' type='submit' title="Select and Continue" />
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default SelectAssignWorker
