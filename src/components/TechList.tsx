type TechListProps = {
    items: string[];
};

const TechList = ({ items }: TechListProps) => {
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {items.map((item) => (
                <li key={item} className="mr-1.5 mt-2">
                    <span className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 transition-colors lg:group-hover:bg-teal-400/20 lg:group-hover:text-teal-200">
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default TechList;
