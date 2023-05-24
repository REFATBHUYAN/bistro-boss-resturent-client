

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center">
            <p className="text-yellow-500 mb-2">---{subHeading}---</p>
            <h1 className="text-4xl uppercase border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;