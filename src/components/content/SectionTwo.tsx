import { nanoid } from "nanoid";
import Card from "../common/Card";

const cards = [
  {
    id: nanoid(),
    imgSrc: "Yyt1n2H822A",
    content: "Key Chain",
    price: "300",
  },
  {
    id: nanoid(),
    imgSrc: "Ws4wd-vJ9M0",
    content: "Watches",
    price: "1000",
  },
  {
    id: nanoid(),
    imgSrc: "dGIEMeN2MV8",
    content: "Bottles",
    price: "450",
  },
  {
    id: nanoid(),
    imgSrc: "oIlix2slmsI",
    content: "Wallet",
    price: "650",
  },
  {
    id: nanoid(),
    imgSrc: "Ce0bztnayXg",
    content: "Mugs",
    price: "500",
  },
  {
    id: nanoid(),
    imgSrc: "UP_RojtnvTU",
    content: "Power Bank",
    price: "800",
  },
];

function SectionTwo() {
  return (
    <div className=" bg-brown-300 my-3">
      <h5 className="text-4xl text-brown-900 py-2 text-center">
        Our Offerings
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between gap-y-4 gap-x-4 px-4 ">
        {cards.map((card) => (
          <Card
            key={card.id}
            imgSrc={card.imgSrc}
            content={card.content}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;
