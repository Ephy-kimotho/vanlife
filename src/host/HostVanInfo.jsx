import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
  const van = useOutletContext();

  return (
    <div className="font-inter text-base">
      <p>
        <span className="font-bold">Name: </span>
        {van.name}
      </p>
      <p className="my-3">
        <span className="font-bold">Category: </span>
        {van.type}
      </p>
      <p className="md:max-w-850">
        <span className="font-bold">Description: </span>
        {van.description}
      </p>
      <p className="mt-3 mb-4">
        <span className="font-bold">Visibility: </span> Public
      </p>
    </div>
  );
}

export default HostVanInfo;
