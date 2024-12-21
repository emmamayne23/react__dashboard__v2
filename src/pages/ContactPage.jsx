import Card from "../components/Card";
import TopCard from "../components/TopCard";
import MyMap from "../components/MyMap";

const ContactPage = () => {
  return (
    <>
      <div>
        <div>
          <TopCard title="contact us" subtitle="We'd love to hear from you" />
        </div>
        <div><MyMap /></div>
        <div className="xl:w-11/12 xl:mx-auto xl:flex xl:justify-between xl:items-start xl:pt-10">    
          <div className="text-sm w-full ">
            <form className="flex flex-col gap-7 py-5 mx-auto">
              <div className="mx-auto space-y-2 w-11/12">
                <label className="font-semibold">First Name *</label>
                <input
                  className="border border-gray-500 hover:border-gray-400 rounded-md w-full focus:border-primary focus:border-2 bg-transparent p-2 focus:outline-none "
                  placeholder="Name"
                />
              </div>
              <div className="mx-auto space-y-2 w-11/12">
                <label className="font-semibold">Last Name *</label>
                <input
                  className="border border-gray-500 hover:border-gray-400 rounded-md w-full focus:border-primary focus:border-2 bg-transparent p-2 focus:outline-none "
                  placeholder="Last name"
                />
              </div>
              <div className="mx-auto space-y-2 w-11/12">
                <label className="font-semibold">Phone Number *</label>
                <input
                  className="border border-gray-500 hover:border-gray-400 rounded-md w-full focus:border-primary focus:border-2 bg-transparent p-2 focus:outline-none "
                  placeholder="xxx xxx xxxx"
                />
              </div>
              <div className="mx-auto space-y-2 w-11/12">
                <label className="font-semibold">Email *</label>
                <input
                  type="email"
                  className="border border-gray-500 hover:border-gray-400 rounded-md w-full focus:border-primary focus:border-2 bg-transparent p-2 focus:outline-none "
                  placeholder="Name"
                />
              </div>
              <div className="mx-auto space-y-2 w-11/12">
                <label className="font-semibold">Enquire related to *</label>
                <input
                  className="border border-gray-500 hover:border-gray-400 rounded-md w-full focus:border-primary focus:border-2 bg-transparent p-2 focus:outline-none "
                  placeholder="Name"
                />
              </div>
              <div className="mx-auto space-y-2 w-11/12">
                <label className="font-semibold">Message *</label>
                <textarea
                  className="border border-gray-500 hover:border-gray-400 h-40 rounded-md w-full focus:border-primary focus:border-2 bg-transparent p-5 focus:outline-none "
                  placeholder="Write your message here..."
                />
              </div>
              <button className="bg-primary p-3 w-24 ml-5 rounded-md">Submit</button>
            </form>
          </div>
          <div className="bg-primary text-sm w-11/12 mx-auto rounded-xl p-5">
            <span>
                <h1 className="font-semibold text-2xl mb-3">Reach out Today</h1>
                <p>Have questions or need assistance? We&apos;re just a message away.</p>
            </span>
            <hr className="my-10" />
            <span>
                <h1 className="font-semibold text-2xl mb-3">Our Location</h1>
                <p>Visit us in person or find our contact details to connect with us directly.</p>
            </span>
          </div>
        </div>
        <div className="mt-10">
          <Card />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
