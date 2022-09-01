import SingleJson from "../../apis/blogs/single.json";

const SingleBlog = () => {
  return (
    <section className="bg-neutral min-h-screen">
      {SingleJson && (
        <>
          <div className="w-11/12 mx-auto bg-white my-10 p-4 rounded-md shadow-sm px-10 space-y-4">
            <h1 className="text-3xl">{SingleJson.title}</h1>
            <h3 className="text-primary ">
              Leave a Comment / subheading / By name
            </h3>
            <h3 className="text-primary text-lg">{SingleJson.desc}</h3>
            <div className="space-y-4">
              {SingleJson.details.map((list, index) => {
                return (
                  <h3 className="text-lg">
                    <span className="text-primary font-bold capitalize">
                      {list.number}. {list.topic}:{" "}
                    </span>{" "}
                    {list.text}
                  </h3>
                );
              })}
            </div>
            <button className="bg-gradient-t-r bg-primary via-secondary to-primary text-white  py-2 px-10 rounded-sm">
              Lorem ipsum dolor sit amet,{" "}
            </button>
          </div>
          <div className="w-11/12 mx-auto bg-white my-10 p-4 rounded-md shadow-sm px-10 space-y-4">
            <h1 className="text-2xl font-light">Leave a Comment</h1>
            <p>Your Email address will not be published. Requied fields ar marked *</p>
            <form method="post">
              <textarea name="message" id="" cols="30" rows="10" placeholder="Enter Your message" className="w-full border bg-neutral border-[#eee] outline-none p-4 resize-none" ></textarea>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <input type="text" name="name" id="" placeholder="Name*" className="w-full p-4 bg-neutral border border-[#eee] outline-none" />
                <input type="email" name="name" id="" placeholder="Email*" className="w-full p-4 bg-neutral border border-[#eee] outline-none" />
                <input type="text" name="name" id="" placeholder="Website*" className="w-full p-4 bg-neutral border border-[#eee] outline-none" />
              </div>
              <button type="submit" className="text-white bg-primary py-3 px-6 mt-4 text-lg">Post Comment</button>
            </form>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleBlog;
