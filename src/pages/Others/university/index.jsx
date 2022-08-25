import BgImage from "../../../asstes/bg/university.png";
import Activity from "../../../asstes/icon/activity.png";
import Store from "../../../asstes/icon/one.png";
const index = () => {
  return (
    <section>
      <div>
        <div className="relative">
          <figure>
            <img src={BgImage} alt="" className="mx-auto my-4 w-11/12" />
          </figure>
          <div className="absolute bottom-[20%] left-[10%] w-11/12 mx-auto space-x-5">
            <button className="bg-secondary px-10 py-2 xl:text-3xl text-xl text-success font-bold rounded-md">
              Login
            </button>
            <button className="bg-secondary px-10 py-2 xl:text-3xl text-xl text-success font-bold rounded-md">
              Register
            </button>
          </div>
        </div>
        <figure>
          <img src={Store} alt="" className="mx-auto my-4 w-full mt-10" />
        </figure>
      </div>
      <div className="bg-neutral w-11/12 mx-auto flex items-center p-6 py-8 rounded-md justify-between md:flex-col flex-col lg:flex-row xl:flex-row space-y-4">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold capitalize">
            Seller Success Stories
          </h1>
          <p className="text-3xl font-medium">
            View these incredible stories of how Daraz <br />
            can fulfill your business wishes
          </p>
          <button className="px-12 py-3 rounded-md text-white font-bold capitalize text-3xl bg-secondary">
            View More Stories
          </button>
        </div>
        <div>
          <video width={800} height={200} controls={true}>
            <source
              src="https://www.youtube.com/watch?v=tlKu1Lg-auQ"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <figure>
        <img src={Activity} alt="" className="mx-auto my-4 w-11/12 mt-10" />
      </figure>
      <div className="flex justify-center items-center space-x-6 mb-4 min-h-[200px]">
        <h1 className="text-2xl capitalize">Need More Help?</h1>
        <button className="px-16 py-3 bg-secondary text-white text-2xl font-bold rounded-md">Contact Us</button>
      </div>
    </section>
  );
};

export default index;
