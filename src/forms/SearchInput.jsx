import React from "react";
import { Input } from "reactstrap";
import './searchInput.css'
const SearchInput = (props) => {
  return (
    <div>
      <Input
        id='searchInput'
        placeholder="ex:王小明"
        value={props.searchTerm}
        onChange={(e) => props.handleSearch(e.target.value)}/>
    </div>
  );
};
export default SearchInput;
