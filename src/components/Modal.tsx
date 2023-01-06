interface Props {
  type?: string
  show: boolean;
  title?: string;
  subTitle?: string;
  icon?: JSX.Element;
  children?: JSX.Element;
  closeModal: (n: boolean) => void;
}

const Modal = (props: Props) => {
  const { type, icon, show, title, children, subTitle, closeModal } = props;
  return (
    <>
      {show && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-3">
            <div className="relative my-6 mx-auto">
              <div className="border-0 rounded-3xl p-5 sm:p-10 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* <AIclosecirclebol
                  className="icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0"
                  onClick={() => closeModal(false)}
                /> */}
                {type === "icon" && (
                <div className="flex items-center justify-center m-auto mt-10 w-20 h-20 rounded-full">
                  {icon}
                </div>
                )}
                <div className="mx-auto">
                  {/* <h5 className="text-4xl text-700 mt-5 text- w-80">
                    {title}
                  </h5> */}
                  <p className="text-center container mt-2 text-grey-slate text-base w-80">
                    {subTitle}
                  </p>
                </div>
                {children}
                {/* <div className="mx-auto p-6">
              <Button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModal(false)}>
                Close
              </Button>
            </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Modal;
