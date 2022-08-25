import FourthBg from "../../../asstes/bg/four.png";
import FirstBg from "../../../asstes/bg/one.png";
import ThirdBg from "../../../asstes/bg/three.jpg";
import SecondBg from "../../../asstes/bg/two.jpg";

const Image = () => {
  return (
    <div className="space-y-4">
    <figure>
      <img src={FirstBg} className="w-full " alt="Not found" />
    </figure>
    <figure>
      <img src={SecondBg} className="w-11/12 mx-auto" alt="Not found" />
    </figure>
    <figure>
      <img src={ThirdBg} className="w-11/12 mx-auto" alt="Not found" />
    </figure>
    <figure>
      <img src={FourthBg} className="w-11/12 mx-auto" alt="Not found" />
    </figure>
    <div className="text-center">
      <button className="uppercase font-bold bg-primary text-white py-2 px-4 rounded-lg text-xl hover:bg-secondary transition duration-200 ease-linear  mx-auto w-max drop-shadow-md">
        Sign up now
      </button>
    </div>
  </div>
  )
}

export default Image