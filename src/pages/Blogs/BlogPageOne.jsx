import React from "react";
import { Link } from "react-router-dom";
import BlogJson from "../../apis/blogs/blogone.json";
import Bg from "../../asstes/img/b1.jpg";
const BlogPageOne = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center gap-4 p-4">
        <div className="space-y-5">
          <h1 className="text-6xl text-primary font-bold">The Journal</h1>
          <h2 className="w-10/12 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptatum minus sunt labore nesciunt esse quia dolores possimus
            nemo doloribus!
          </h2>
          <div className="bg-neutral p-3 rounded-lg flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-neutral w-full"
            />
          </div>
        </div>
        <figure>
          <img src={Bg} alt="" cla />
        </figure>
      </div>
      <div className="w-10/12 mx-auto shadow-xl rounded-lg my-2 space-y-2">
        <div className="px-6 py-4  space-y-4">
          <h1 className="text-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            nisi magnam earum aliquid temporibus veritatis id repudiandae
            laboriosam, cumque fuga. Harum, dolor! Magnam tenetur, delectus
            perspiciatis omnis aperiam odio molestias.
          </p>

          <p className="text-primary">
            <Link to={"blog/single/2"}> <span className="text-primary">Read more</span> </Link>
          </p>
        </div>
        <div className="border-t-[2px] p-4 border-neutral">
          <h1>
           {new Date(Date.now()).toLocaleDateString()}
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-10/12 mx-auto gap-8">
        {
            BlogJson.map((blog,index)=>{
                return (
                    <div className=" mx-auto shadow-xl rounded-lg my-2 space-y-2">
                    <div className="px-6 py-4  space-y-4">
                      <h1 className="text-3xl">
                        {blog.title}
                      </h1>
                      <p>
                        {blog.desc.slice(0,200)} ...
                      </p>
            
                      <p className="text-primary">
                        <Link to={`/blog/single/journal/${blog.title}`}> <span className="text-primary">Read more</span> </Link>
                      </p>
                    </div>
                    <div className="border-t-[2px] p-4 border-neutral">
                      <h1>
                       {new Date(Date.now()).toLocaleDateString()}
                      </h1>
                    </div>
                  </div>
                )
            })
        }
     
      </div>
    </section>
  );
};

export default BlogPageOne;
