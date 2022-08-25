import React from "react";
import AgrementText from "../../../apis/affiliate/agrementText.json";
import AgrementList from "../../../apis/affiliate/list.json";
const Agrement = () => {
  return (
    <section className="w-11/12 mx-auto mt-6">
      <h1 className="text-center font-bold text-5xl my-4">
        Affiliate Agreement
      </h1>
      <div className="space-y-3">
        {AgrementText.map((val, index) => {
          return (
            <p className="text-xl" key={index}>
              {val.text}
            </p>
          );
        })}
      </div>
      <div className="my-4 w-11/12 mx-auto space-y-6">
        {AgrementList.map((list, index) => {
          return (
            <div className="space-y-2">
              <h1 className="font-bold text-2xl uppercase">{list.number} {list.name}</h1>
            {
              list.list.map((val,index)=>{
                return(
                  <div key={index} className="space-y-2 ml-4">
                  <p className="text-xl font-medium">
                   <span className="text-2xl font-bold"> {val.number}</span> {val.text}
                  </p>
                </div>
                )
              })
            }
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Agrement;
