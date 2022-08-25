import Vendor_One from "../../../asstes/bg/vendor.jpg";
import Vendor_Two from "../../../asstes/bg/vendor_2.jpg";
import Vendor_Three from "../../../asstes/bg/vendor_3.jpg";
import Vendor_Venefits from "../../../asstes/bg/vendor_benifit.jpg";
const index = () => {
    const Submit =(e)=>{
        e.preventDefault()
    }
  return (
    <section className="bg-primary py-2 min-h-screen">
      <div className="my-4 text-center font-bold xl:text-5xl text-4xl">
        <h1 className="">
          ৩টি ধাপ ফলো করে আজই পন্য বিক্রয় শুরু করুন হ্যাপিকার্টে!
        </h1>
        <h1 className="text-white">
          আপনার সফলতার গল্পের শুরুটা হোক এখান থেকেই
        </h1>
      </div>
      <div className="w-8/12 mx-auto">
        <figure>
          <img src={Vendor_One} alt="" />
        </figure>
        <figure>
          <img src={Vendor_Two} alt="" />
        </figure>
        <figure>
          <img src={Vendor_Three} alt="" />
        </figure>
      </div>
      <div className="my-3 w-9/12 mx-auto">
        <figure>
          <img src={Vendor_Venefits} alt="" />
        </figure>
      </div>
      <section className="bg-secondary grid gird md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-x-5 pt-5 gap-y-5 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">দিক নির্দেশনা</h1>
          <p className="text-xl font-semibold">
            আপনি যদি আমাদের সাথে পন্য বিক্রয় করতে আমাদের ওয়েব সাইটে একজন ভেন্ডর
            হিসেবে রেজিস্ট্রেশন করতে চান তবে পাশে থাকা ফর্মটি পূরন করুন এবং ৩-৭
            কার্য দিবস অপেক্ষা করুন আপনার ভেন্ডরশীপ যতদিন না পর্যন্ত এপ্রোভ হয়।
            আপনাকে পরবর্তী আপডেট আপনার মেইলে অথবা ফোন নাম্বারে জানিয়ে দেওয়া হবে।
          </p>
          <div className="flex justify-center items-center space-x-5 my-2 w-11/12 xl:w-8/12 mx-auto py-4">
            <button className="bg-white w-full py-4 rounded-lg text-xl font-bold shadow-xl">
              প্রাইভেসি পলেসি
            </button>
            <button className="bg-white w-full py-4 rounded-lg text-xl font-bold shadow-xl ">
              ভেন্ডর পলেসি
            </button>
          </div>
        </div>
        <div className="p-4 bg-warning w-10/12 mx-auto rounded-md space-y-2">
          <form method="POST" onSubmit={Submit} className="grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2">
            <input
              type="text"
              placeholder="Name"
              className="py-4 px-4 text-lg  rounded-md w-full"
            />
            <input
              type="text"
              placeholder="User name"
              className="py-4 px-4 text-lg  rounded-md w-full"
            />
          </form>
          <div className="grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2">
            <input
              type="text"
              placeholder="Email"
              className="py-4 px-4 text-lg  rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="py-4 px-4 text-lg  rounded-md w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Your store name"
            className="py-4 px-4 text-lg  rounded-md w-full"
          />{" "}
          <input
            type="text"
            placeholder="Address"
            className="py-4 px-4 text-lg  rounded-md w-full"
          />{" "}
          <select className="w-full py-4 px-4 font-bold outline-none border-none">
            <option selected>Category</option>
            <option value={"#"}>Item one</option>
            <option value={"#"}>Item two</option>
            <option value={"#"}>Item three</option>
          </select>
          <input
            type="file"
            placeholder="Address"
            className="py-4 px-4 text-lg  rounded-md w-full"
          />{" "}
          <div className="flex  items-center space-x-4 ">
            <input
              type="checkbox"
              placeholder="Address"
              className="py-4 px-4 text-lg  rounded-md w-5 h-5"
            />{" "}
            <p className="text-lg">Accept terms & conditions</p>
          </div>
          <button type="submit" className="text-white bg-[#000] w-full py-3 rounded-xl text-2xl">Submit</button>
        </div>
      </section>
    </section>
  );
};

export default index;
