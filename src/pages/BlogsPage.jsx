import TopCard from "../components/TopCard";
import Card from "../components/Card";

import blog1 from "../assets/images/blog-img1.jpg";
import blog2 from "../assets/images/blog-img2.jpg";
import blog3 from "../assets/images/blog-img3.jpg";
import blog4 from "../assets/images/blog-img4.jpg";
import blog5 from "../assets/images/blog-img5.jpg";
import blog6 from "../assets/images/blog-img6.jpg";
import blog7 from "../assets/images/blog-img8.jpg";
import blog8 from "../assets/images/blog-img9.jpg";
import blog9 from "../assets/images/blog-img10.jpg";

import user1 from "../assets/image1.png";
import user2 from "../assets/image2.png";
import user3 from "../assets/image3.png";
import user4 from "../assets/images/user-9.jpg";
import user5 from "../assets/user-1.jpg";
import user6 from "../assets/user-5.jpg";
import user7 from "../assets/images/user-4.jpg";
import user8 from "../assets/images/user-6.jpg";
import user9 from "../assets/images/user-8.jpg";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      category: "Lifestyle",
      image: `${blog1}`,
      user: `${user1}`,
      title: "Business from the brink of ruin by optimizing our website....",
    },
    {
      id: 2,
      category: "Social",
      image: `${blog2}`,
      user: `${user2}`,
      title: "The work is top-notch and I consistently outrank all my...",
    },
    {
      id: 3,
      category: "Social",
      image: `${blog3}`,
      user: `${user3}`,
      title: "We have a plan that aligns perfectly with your goal...",
    },
    {
      id: 4,
      category: "Gadget",
      image: `${blog4}`,
      user: `${user4}`,
      title: "Grow my business through organic search and marketing...",
    },
    {
      id: 5,
      category: "Health",
      image: `${blog5}`,
      user: `${user5}`,
      title: "Tailored to your audience to enhance brand awareness...",
    },
    {
      id: 6,
      category: "Gadget",
      image: `${blog6}`,
      user: `${user6}`,
      title: "Uncover valuable insights for strategic business decisions...",
    },
    {
      id: 7,
      category: "Lifestyle",
      image: `${blog7}`,
      user: `${user7}`,
      title: "Drive growth and achieve your business objectives effectively...",
    },
    {
      id: 8,
      category: "Design",
      image: `${blog8}`,
      user: `${user8}`,
      title: "Free access to our global partner network and marketplace...",
    },
    {
      id: 9,
      category: "Social",
      image: `${blog9}`,
      user: `${user9}`,
      title: "Define each stage of work to see whats important for you...",
    },
  ];

  return (
    <>
      <div>
        <div>
          <TopCard title="blog page" subtitle="Latest blog & news" />
        </div>
        <div className="lg:grid lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border w-11/12 border-gray-600 rounded-md relative my-5 mx-auto hover:scale-105 duration-300"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  className="rounded-t-md  h-60 w-full object-cover"
                />
                <p className="bg-primary_dark font-semibold rounded-2xl w-24 p-2 absolute right-2 top-48 text-xs text-center">
                  2 min Read
                </p>
              </div>
              <img
                src={blog.user}
                className="w-10 h-10 rounded-full absolute left-8 top-56"
              />
              <div className="p-8 space-y-5">
                <div className="w-20 text-center rounded-2xl bg-gray-500">
                  {blog.category}
                </div>
                <div>{blog.title}</div>
              </div>
              <div className="flex items-center justify-between text-sm px-3 pb-3">
                <div className="flex gap-5">
                  <span className="flex items-center gap-2">
                    <i className="fa-regular fa-eye"></i>
                    <p>45</p>
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fa-regular fa-comment"></i>
                    <p>4</p>
                  </span>
                </div>
                <div className="text-xs">{new Date().toDateString()}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Card />
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
