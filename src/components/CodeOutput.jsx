import React, { useState } from 'react';

const CodeOutput = (props) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div className="container mx-auto">
      {visible && props.output && (
        <div className="relative mt-4 bg-gray-800 text-white p-4 rounded">
          <button
            className="absolute top-0 right-0 text-white p-2 rounded-full bg-transparent"
            onClick={handleClose}
          >
            <i class="bi bi-x-lg"></i>
          </button>
          {/* Add the code output content here */}
          Code Output Window
        </div>
      )}
    </div>
  );
};

export default CodeOutput;
