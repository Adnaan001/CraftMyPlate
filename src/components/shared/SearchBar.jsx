import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../redux/slices/cartSlice';
import menuData from '../../data/menuData';

const SearchBar = ({className}) => {
  const [query,setQuery]=useState('');
  const [filteredMenu, setFilteredMenu] = useState([]); 

  // const dispatch=useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); 
    setQuery(value);

    if (value.trim() === "") {
      setFilteredMenu([]); 
      return;
    }


    const results = menuData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setFilteredMenu(results); 
  };

  return (
    <div>
      <div className={`flex items-center border border-primary-200 rounded-lg p-2 w-full ${className}`}>
        
        <FiSearch className="text-primary-200 text-lg" />
          <input
              type="text"
              placeholder="Search categories"
              value={query}
              onChange={handleSearch}
              className="flex-grow ml-2 outline-none text-primary-200 placeholder-primary-200"
          />
    </div>
    <div>
    {filteredMenu.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {filteredMenu.map((item) => (
            <li
              key={item.id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
              }}
              onClick={() => alert(`You selected: ${item.name}`)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
      {query && filteredMenu.length === 0 && (
        <p style={{ color: "red", marginTop: "10px" }}>No results found.</p>
      )}
    </div>
    </div>
  )
}

export default SearchBar