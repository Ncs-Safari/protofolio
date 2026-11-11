
type TechListProps = {
    items : string[];
};

const TechList = ({items} : TechListProps) => {
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {items.map((item, index) => (
                <li key={index} className="mr-2 mb-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default TechList;