import { FigureType } from "../ui/Figure/Figure";
import hotel1 from "../../assets/img/hotel-1.jpg";
import hotel2 from "../../assets/img/hotel-2.jpg";
import hotel3 from "../../assets/img/hotel-3.jpg";
import user3 from "../../assets/img/user-3.jpg";
import user4 from "../../assets/img/user-4.jpg";
import user5 from "../../assets/img/user-5.jpg";
import user6 from "../../assets/img/user-6.jpg";

const p1 =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.";
const p2 =
  "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.";

type Gallery = FigureType[];
type Recommender = {
  name: string;
  image: string;
};

type Hotel = {
  name: string;
  location: string;
  gallery: Gallery;
  stars: number;
  rating: number;
  reviews: number;
  description: string[];
  offers: string[];
  recommendations: Recommender[];
};

const DUMMY_HOTEL: Hotel = {
  name: "Hotel Las Palmas",
  location: "Albufeira, Portugal",
  gallery: [
    { id: "i1", src: hotel1, description: "Hotel 1" },
    { id: "i2", src: hotel2, description: "Hotel 2" },
    { id: "i3", src: hotel3, description: "Hotel 3" },
  ],
  stars: 5,
  rating: 8.6,
  reviews: 429,
  description: [p1, p2],
  offers: [
    "Close to the beach",
    "Breakfast included",
    "Free airport shuttle",
    "Free wifi in all rooms",
    "Air conditioning & heating",
    "Pets allowed",
    "We speak all languages",
    "Perfect for families",
  ],
  recommendations: [
    {
      name: "Lucy",
      image: user6,
    },
    {
      name: "Mike",
      image: user3,
    },
    {
      name: "Frank",
      image: user4,
    },
    {
      name: "James",
      image: user5,
    },
  ],
};

export default DUMMY_HOTEL;
export type { Gallery, Hotel, Recommender };
