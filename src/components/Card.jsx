import designImage from "../assets/design-collection.png"

const Card = () => {
  return (
    <>
        <div>
            <div className="bg-primary mx-auto w-11/12 rounded-xl md:h-80 lg:h-96 grid md:grid-cols-2 items-center">
                <div className="p-5">
                    <h1 className="font-semibold text-3xl">Develop with feature-rich Next.js Dashboard</h1>
                    <div className="flex gap-3 my-5">
                        <button className="bg-secondary text-white hover:bg-primary_dark duration-200 p-2 rounded-lg">Member Login</button>
                        <button className="text-secondary border border-secondary hover:text-white p-2 rounded-lg duration-200 hover:bg-secondary">Register as Member</button>
                    </div>
                    <span>One-time purchase - no recurring fees.</span>
                </div>
                <div className="hidden md:flex h-full rounded-xl">
                    <img src={designImage} className=" object-cover rounded-xl" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Card