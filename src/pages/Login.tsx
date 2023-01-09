import AuthWrapper from '../components/AuthWrapper'
import LoginForm from './LoginForm'

const Login = () => {

  return (
    <>
      <AuthWrapper>
        <LoginForm />
      </AuthWrapper>
    </>
  )
}

export default Login



// return (
//   <div className="bg-[url('assets/svg/loginbgdot.svg')] h-screen">
//     <section className="relative h-screen">

//       <LoginForm />
//       <div className="mx-auto flex flex-col">

//         <div className="bg-red-600 flex flex-1 flex-col items-center h-56">fdkjj</div>
//         <div className="bg-blue-600 flex flex-1 flex-col items-center h-[50%]">kfjjfj</div>

//       </div>
//     </section>
//   </div>
// )
