import Image from 'next/image';

import searchIcon from '../../../../../public/assets/icons/search-icon.svg';

const Search = () => {
	return (
		<form className="flex item-center ml-8">
			<input type="text" placeholder="Kategori    |Lokasi" className="border border-gray-50 py-3 px-3 rounded-l-md text-sm text-gray-50" />

			<button className="flex justify-center items-center bg-blue-100 border-blue-100 h-[50px] w-[50px] text-white text-sm rounded-r-md" type="submit">
				<Image src={searchIcon} alt="Search Icon" height="24" width="24" />
			</button>
		</form>
	);
};

export default Search;
