import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItem = data.filter(item => item.category === 'popular');
            setMenu(popularItem);
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={'Popular Items'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-6">
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;