// SearchBar.jsx
import React from "react"

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Search Course title | Tutor name | Location ..."
      value={searchTerm}
      onChange={handleChange}
      className="search-bar"
    />
  )
}

export default SearchBar
