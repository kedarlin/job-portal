import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const ApplySection = () => {
  const [toggleWishlist, setToggleWishlist] = useState<boolean>(false);

  return (
    <div className="jobdetailer-apply">
      <FaHeart
        onClick={() => setToggleWishlist(!toggleWishlist)}
        style={{
          color: toggleWishlist ? "red" : "",
          cursor: "pointer",
          fontSize: "22px",
        }}
      />
      <button className="jobdetailer-apply-button">Quick Apply</button>
    </div>
  );
};

export default ApplySection;
