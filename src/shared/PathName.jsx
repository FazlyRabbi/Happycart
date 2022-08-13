import React, { useEffect, useState } from "react";

const PathName = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const pathName = window.location.pathname;
    setName(pathName);
    return () => {};
  }, []);

  return (
    <div>
      <h1 className="text-lg font-bold p-2 bg-gray-200">{name}</h1>
    </div>
  );
};

export default PathName;
