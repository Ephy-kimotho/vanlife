import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const van = useOutletContext();

  return (
    <div>
      <p className="text-night text-base sm:text-lg font-inter font-bold">
        ${van.price}.00
        <span className="font-normal text-sm sm:text-base"> /day</span>
      </p>
    </div>
  );
}

export default HostVanPricing;
