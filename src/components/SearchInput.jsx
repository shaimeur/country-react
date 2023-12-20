import { useState } from "react";
const SearchInput = () =>{
const [searchedItem,setSearchedItem] = useState("")

const handleSearch = (e) =>{
    console.log(e.target.value)
    setSearchedItem(e.target.value)
}

    return (
        <div className="flex m-10 justify-items-center bor">

            <svg className="h-8 w-8 text-gray-500"
             width="24" height="24" viewBox="0 0 24 24"
              strokeWidth="2" stroke="currentColor"
               fill="none" strokeLinecap="round"
               strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
             <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" /></svg>

            <input
                className="rounded-lg h-14 w-96"
                type="text"
                onChange={handleSearch}
                value={searchedItem}
                placeholder="Search for a country..."
            />
        </div>
    )
}

export default SearchInput;