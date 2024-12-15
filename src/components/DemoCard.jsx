import democard from "../assets/demo-main.jpg"
import user from "../assets/image1.png"
import user1 from "../assets/image2.png"
import { Link } from "react-router-dom"
const DemoCard = () => {
  return (
    <>
        <div>
            <div className="bg-secondary text-base flex flex-col text-center py-3 gap-3 md:flex-row md:items-center md:justify-around">
                <div className="flex justify-center">
                    <img src={user} alt="user" className="w-12 h-12 border-black border rounded-full" />
                    <img src={user1} alt="user" className="w-12 h-12 border-black border rounded-full" />
                </div>
                <span>Save valuable time and effort spent searching for a solution.</span>
                <Link to="/" className="underline font-semibold">Contact us now</Link>
            </div>

            <div className="my-3 bg-primary_dark rounded-xl mx-7 p-5 pt-10">
                <h1 className="text-4xl font-semibold my-5 mb-10">Discover Powerful Dozens <br /> of Purpose-Fit Templates</h1>
                <img src={democard} alt="democard" className="mx-auto" />
                <div className="flex flex-col md:flex md:flex-row gap-7 text-center p-5 mt-10">
                    <div>
                        <h1 className="text-lg">High Customizabilty</h1>
                        <p className="leading-6">Tailor the dashboard to your exact needs. Customize layouts, color schemes, and widgets effortlessly for a personalized user experience.</p>
                    </div>
                    <div>
                        <h1 className="text-lg">Powerful Data Analytics</h1>
                        <p className="leading-6">Unlock the true potential of your data with our advanced analytics tools. Gain valuable insights and make data-driven decisions with ease.</p>
                    </div>
                    <div>
                        <h1 className="text-lg">Interactive Charts</h1>
                        <p className="leading-6">Visualize complex data sets beautifully with our interactive graphs and charts. Quickly grasp trends and patterns for smarter analysis.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DemoCard