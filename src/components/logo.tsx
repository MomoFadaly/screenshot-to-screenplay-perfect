
import React from "react";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-white">
      <div className="text-4xl font-bold">
        <span>CG</span>
      </div>
      <span className="text-2xl font-bold">Caption Genie</span>
    </Link>
  );
};

export default Logo;
