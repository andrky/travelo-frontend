const InfoItem = ({ label, sublabel }: { label: string; sublabel: string }) => {
	return (
		<div className="flex flex-col text-center">
			<h1 className="text-heading-2 font-bold font-mont text-gray-100 mb-1">{label}</h1>

			<p className="text-heading-4 text-gray-70">{sublabel}</p>
		</div>
	);
};

export default InfoItem;
