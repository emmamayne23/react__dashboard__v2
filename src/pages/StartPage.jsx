import googleImage from "../assets/images/Google__G__logo.svg.png"
import fbImage from "../assets/images/5D8s-GsHJlJ.png"
import singInImage from "../assets/images/login-bg.svg";

import { Link } from "react-router-dom"

const StartPage = () => {
  return (
    <>
    <div className=" lg:w-full xl:flex">
        <img className=" hidden lg:flex lg:w-8/12" src={singInImage}  />
        <div className="text-sm grid place-items-center gap-5 pt-10">
    <Link to="/">
        <button className="underline text-primary">Go back Home</button>
    </Link>
        <div>
            <h1 className="text-2xl font-bold">Welcome to Modernize</h1>
            <p className="text-gray-400">Your Admin Dashboard</p>
        </div>
        <div className="flex gap-10">
            <span className="border rounded-md flex gap-2 justify-around items-center p-2 px-3">
                <img src={googleImage} className="w-6 h-6" />
                <p>Google</p>
            </span>
            <span className="border rounded-md flex gap-2 justify-around items-center p-2 px-3">
                <img src={fbImage} className="w-6 h-6 " />
                <p>Facebook</p>
            </span>  
        </div>
        <div>or sign up with</div>
        <form className="space-y-5">
            <div className="flex flex-col gap-1">
                <label>Username</label>
                <input className="border rounded-md bg-transparent p-2 focus:outline-none" />
            </div>
            <div className="flex flex-col gap-1">
                <label>Email</label>
                <input className="border rounded-md bg-transparent p-2 focus:outline-none " />
            </div>
            <div className="flex flex-col gap-1">
                <label>Password</label>
                <input className="border rounded-md bg-transparent p-2 focus:outline-none " />
            </div>
            <div className="flex gap-3">
                <input type="checkbox" />
                <p>Remember this Device</p>
                <span className="text-primary">Forgot Password ?</span>
            </div>
            <button className="bg-primary w-full rounded-md py-2.5">Sign Up</button>
        </form>
        <div className="mb-5">Already have an Account? <Link to="/get-started" className="text-primary hover:cursor-pointer">Sign In</Link></div>
    </div>
    </div>
    </>
  )
}

export default StartPage