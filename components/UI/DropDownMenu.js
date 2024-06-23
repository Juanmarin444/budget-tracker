import NavButton from "./Navigation/NavButton";
export default function DropDownMenu ({items = []}) {
    return (
        <div className="hidden absolute left-0 backdrop-blur-xl bg-white/35 rounded-md shadow-md group-hover:block p-6 z-20 max-w-full min-w-72">
            {items.map((item, index) => (
                <NavButton key={index} text={item} className="hover:text-stone-800 font-bold justify-start py-3" />
            ))}
        </div>
    );
}