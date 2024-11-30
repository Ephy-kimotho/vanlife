import { useOutletContext } from "react-router-dom";

function HostVanPhoto() {
  const van = useOutletContext();
  return (
    <div>
      <img
        src={van.imageUrl}
        alt={`A ${van.name}`}
        className="w-20 h-20 rounded-md object-cover"
      />
    </div>
  );
}

export default HostVanPhoto;
