import React from "react";
import { AutoComplete, Input } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function isMatched(searchString, sentence) {
  const regex = new RegExp(searchString, "i");
  return regex.test(sentence);
}

const searchResult = (query, data) =>
  data?.map((_, idx) => {
    const category = `${query}${idx}`;
    return {
      value: category,
      label: (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>
            {isMatched(query, _.course.title) && (
              <>
                Found {query} on{" "}
                <Link
                  className="text-blue-600"
                  to={`/dashboard/courses/${_.course._id}`}
                >
                  {_.course.title}
                </Link>
              </>
            )}
            {!isMatched(query, _.course.title) && <>Not matched</>}
          </span>
        </div>
      ),
    };
  });
const Search = () => {
  const courses = useSelector((state) => state.getcourses).result;
  const [options, setOptions] = useState([]);
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value, courses) : []);
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };
  return (
    <AutoComplete
      style={{
        width: "90%",
        display: "block",
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search
        size="large"
        placeholder="Search by title, date, topic"
        enterButton
        className="search-btn ml-5"
      />
    </AutoComplete>
  );
};
export default Search;
