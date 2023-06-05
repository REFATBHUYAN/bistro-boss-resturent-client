import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle";
// import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../Hooks/useCart";
import CheckOutForm from "./CheckOurForm/CheckOutForm";

const stripe = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum + item.price, 0);
    const price = total.toFixed(2);
  return (
    <div>
      <SectionTitle
        subHeading={"Please Provide Card Data"}
        heading={"Payment"}
      ></SectionTitle>
      <h1 className="text-3xl">Teka o teka tumi uira uiura asoo............</h1>
      <Elements stripe={stripe}>
        <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
