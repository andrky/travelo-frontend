import PackageCard from './PackagesCard/packageCard';

const Packages = () => {
	return (
		<>
			<h3 className="text-heading-3 text-black font-mont font-bold pt-14 mb-4">Paket Liburan Populer</h3>
			<p className="text-heading-4 text-white mb-4">Paket terbaik yang sering dipilih oleh pelanggan</p>

			<div className="flex justify-beetween">
				<PackageCard />
				<PackageCard />
				<PackageCard />
			</div>
		</>
	);
};

export default Packages;
