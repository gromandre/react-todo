import React from "react";

const SearchPanel = () => {
    const textPlaceholder = 'Search';
    const searchStyle = {fontSize: '25px'};
    return <input placeholder={textPlaceholder} style={searchStyle} />;
}

export default SearchPanel;