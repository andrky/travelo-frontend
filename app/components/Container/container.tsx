const Container = ({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) => {
	return (
    <div className="max-w-screen-xl mx-auto">
      {children}
    </div>
  )
};

export default Container;
