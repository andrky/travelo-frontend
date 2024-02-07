import PackageCard from './PackagesCard/packageCard';

const Packages = () => {
	return (
		<>
			<h3 className="text-heading-3 text-white font-mont font-bold pt-14">Paket Liburan Populer</h3>
			<p className="text-heading-4 text-white mb-4">Paket terbaik yang sering dipilih oleh pelanggan</p>

			<div className="flex justify-between">
				<PackageCard />
				<PackageCard />
				<PackageCard />
			</div>
		</>
	);
};

export default Packages;
