import React from 'react'
import InputField from './InputField'
import { RiSearchLine } from "react-icons/ri";

const SearchItem = ({ search, setSearch }) => {
	const searchFieldData =
	{
		label: { label: 'Search', className: 'font-worksans font-[500]' },
		inputClasses: "font-worksans placeholder:italic placeholder:text-slate-400 text-slate-800 block bg-white w-full border border-slate-300 rounded-md py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
		id: 'search',
		type: 'text',
		role: 'searchbox',
		placeholder: "Let's go fishing...",
		value: search,
		onChange: (e) => setSearch(e.target.value),
		name: 'username',
	}
	return (
		<>
			<label className=" relative block w-1/2 m-auto" onSubmit={(e) => e.preventDefault()}>
				<span className="sr-only">Search</span>
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<RiSearchLine size={16} className="text-gray-500 ml-2" />
				</span>
				<InputField {...searchFieldData} />
			</label >

		</>
	)
}

export default SearchItem
{/* <form onSubmit={(e) => e.preventDefault()} className='my-12 w-1/2 flex justify-between m-auto items-center border border-black  rounded-xl py-1 px-4 focus:ring focus:ring-red' >
			<InputField {...searchFieldData} />
			<RiSearchLine size={32} className="text-gray-500 ml-2" />  


			
		</form> */}
{/* <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" /> */ }
