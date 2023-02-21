import { format } from "date-fns"

const WorkersReviews = ({ worker, setStateBoolStats, setStateObject }: any) => {
  return (
    <>{worker.map((worker: any) => (
      <div className="grid grid-cols-2 gap-5 m-4" style={{display: 'grid', gridTemplateColumns: 'repeat(2, minmax(3, 1fr)' }} onClick={() => setStateObject(worker)}>
        <div className="p-6 space-y-6 overflow-hidden rounded-2xl shadow-sm border border-[#E2EAFE] cursor-pointer" onClick={() => setStateBoolStats(true)}>
          <div className="flex space-x-4">
            <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow" />
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-base font-semibold">{worker?.worker?.first_name} {worker?.worker?.last_name}</a>
              <span className="text-sm">Today — {format(new Date(worker?.worker?.created_at), "dd-MM-yyyy")}</span>
            </div>
          </div>

          <div>
            <span className={`${worker?.rating === 'Good' || 'AlmostGood' ? 'text-[#00C288]' : "text-red-600"} bg-[#EBFFF9] px-4 py-2 my-5 font-semibold text-base rounded-full min-w-max`}>{worker?.rating}</span>
            <p className='text-lg my-5'>{worker?.comment}</p>
          </div>
        </div>
      </div>
    ))
    }
    </>
  )
}

export default WorkersReviews
