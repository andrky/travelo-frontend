const Container = ({
	children,
	size = 'xl', // will be a page or nested layout
}: {
	children: React.ReactNode;
	size?: string;
}) => {
	return <div className={`${size === 'xl' ? 'max-w-screen-xl' : 'max-w-screen-lg'} mx-auto`}>{children}</div>;
};

export default Container;
