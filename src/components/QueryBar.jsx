import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSearch = () => {
    // Perform search logic based on searchQuery
    console.log("Searching for:", searchQuery);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
    // Perform image upload logic
    console.log("Uploaded image:", file);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleFAQ = () => {
    // shows list of faq's
    console.log("faq");
  };

  return (
    <div>
         <h2 className="text-4xl font-bold mb-4 text-center mt-2">Ace With Verified Answers</h2>
    
    <div className="flex items-center justify-center mt-2">
      <div className="w-4/6 rounded-full overflow-hidden bg-white-600 shadow-md">
        <div className="flex items-center space-x-4 px-4 py-2">
          <div className="relative flex-grow">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-800 bg-transparent border-none focus:outline-none"
              placeholder="Type to search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute w-5 h-5 text-gray-500 left-3 top-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              {/* Path for the search icon */}
            </svg>
          </div>

          {searchQuery && (
            <button
              className="px-1 py-2 text-gray-600"
              onClick={handleClearSearch}
            >
              <i class="bi bi-x-lg"></i>
            </button>
          )}


          <label className="flex items-center space-x-2 cursor-pointer">
            <span className="text-gray-600">
                <i class="bi bi-image-fill"></i>
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>


          <button
            className="px-3 py-2 text-white bg-gray-500 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            onClick={handleSearch}
          >
            <i class="bi bi-search"></i>
          </button>
          

          <button className="text-gray"
                onClick={handleFAQ}>
            <i className="bi bi-file-earmark-bar-graph me-2"></i>
          </button>

        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
