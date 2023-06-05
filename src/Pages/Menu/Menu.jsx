import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from '../../assets/menu/menu-bg.jpg'
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
// import PopularMenu from "../Home/PopularMenu";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title='Our Menu'></Cover>
      {/* main cover */}
      <SectionTitle subHeading={'Dont Miss'} heading={"Today's Offer"}></SectionTitle>
      {/* offered menu item */}
      <MenuCategory item={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory item={desserts} title={'Desserts'} img={desertImg}></MenuCategory>
      {/* pizza menu item */}
      <MenuCategory item={pizza} title={'Pizza'} img={pizzaImg}></MenuCategory>
      <MenuCategory item={salad} title={'Salad'} img={saladImg}></MenuCategory>
      <MenuCategory item={soup} title={'Soup'} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
