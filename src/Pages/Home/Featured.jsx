import SectionTitle from "../../Components/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImg})` }}
      className=" text-white  bg-fixed"
    >
      <div className="bg-slate-100 bg-opacity-70 pt-10 text-black">
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"Featured Item"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-10 py-8 px-16">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              sit fugit quae voluptas. Nam, iste ipsam dignissimos tenetur
              quibusdam amet ratione quod voluptatibus eos dicta inventore!
              Aspernatur ad in aperiam?
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
