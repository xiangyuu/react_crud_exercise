import React from "react";
import { Input } from "reactstrap";

const SearchInput = (props) => {
  return (
    <div>
      <Input
        placeholder="ex:王小明"
        value={props.searchTerm}
        onChange={(e) => props.handleSearch(e.target.value)}/>
    </div>
  );
};
export default SearchInput;
