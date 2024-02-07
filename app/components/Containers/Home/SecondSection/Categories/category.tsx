import CategoryCard from './CategoryCard/categoryCard';

const Categories = () => {
	return (
		<>
			<h3 className="text-heading-3 text-black font-mont font-bold pt-14 mb-4">Kategori Tempat</h3>

			<div className="flex justify-between">
				{Array.from({ length: 6 }).map((_, index) => (
					<CategoryCard key={index} />
				))}
			</div>
		</>
	);
};

export default Categories;
