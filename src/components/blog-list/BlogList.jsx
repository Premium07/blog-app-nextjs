import { useState } from "react";
import BlogItems from "../blog-items/BlogItems";

const BlogList = () => {
  const [activeButton, setActiveButton] = useState("All");
  const buttons = ["All", "Technology", "Startup", "Lifestyle"];
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <div>
      <div className="flex justify-center gap-3 my-10 px-2">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              onClick={() => handleButtonClick(button)}
              className={`border border-black py-1 px-4 rounded-sm duration-300 ${
                activeButton === button ? "bg-black text-white" : ""
              }`}
            >
              {button}
            </button>
          );
        })}
      </div>
      <BlogItems active={activeButton}/>
    </div>
  );
};

export default BlogList;
