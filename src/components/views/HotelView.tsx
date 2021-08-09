import React from "react";
import styles from "./HotelView.module.scss";
import Figure from "../ui/Figure/Figure";
import Svg from "../ui/Svg/Svg";
import { Hotel } from "../data/Hotel";
import user1 from "../../assets/img/user-1.jpg";
import user2 from "../../assets/img/user-2.jpg";

type Props = { hotel: Hotel } & React.HTMLAttributes<HTMLDivElement>;

const HotelView: React.FC<Props> = ({ hotel, ...props }) => {
  const { gallery } = hotel;
  const { name, rating, reviews, stars, location } = hotel;
  const { description, offers, recommendations } = hotel;

  const recommendation = `${recommendations[0].name} and ${
    recommendations.length - 1
  } other friends recommend this hotel.`;

  return (
    <main className={`${styles.hotel} ${props.className}`}>
      {/*Gallery*/}
      <div className={styles.gallery}>
        {gallery.map((fig) => (
          <Figure key={fig.id} figure={fig} />
        ))}
      </div>

      {/*Overview*/}
      <div className={styles.overview}>
        <h1 className={styles.overview__heading}>{name}</h1>

        <div className={styles.overview__stars}>
          {Array(stars)
            .fill(0)
            .map((i, index) => (
              <Svg
                key={index}
                name={"icon-star"}
                className={styles[`overview__icon-star`]}
              />
            ))}
        </div>

        <div className={styles.overview__location}>
          <Svg
            name={"icon-location-pin"}
            className={styles[`overview__icon-location`]}
          />
          <button className={"btn-inline"}> {location}</button>
        </div>

        <div className={styles.overview__rating}>
          <div className={styles[`overview__rating-average`]}>{rating}</div>
          <div className={styles[`overview__rating-count`]}>
            {`${reviews} Reviews`}
          </div>
        </div>
      </div>

      {/*Details*/}
      <div className={styles.detail}>
        {/*Description*/}
        <div className={styles.description}>
          {description.map((desc, index) => (
            <p className={styles.paragraph} key={index}>
              {desc}
            </p>
          ))}
          <ul className={styles.list}>
            {offers.map((offer, index) => (
              <li className={styles.list__item} key={index}>
                {offer}
              </li>
            ))}
          </ul>
          <div className={styles.recommend}>
            <p className={styles.recommend__count}>{recommendation}</p>
            <div className={styles.recommend__friends}>
              {recommendations
                .slice()
                .reverse()
                .map((rec) => (
                  <img
                    key={rec.name}
                    src={rec.image}
                    alt={rec.name}
                    className={styles.recommend__photo}
                  />
                ))}
            </div>
          </div>
        </div>

        {/*Reviews*/}
        <div className={styles.reviews}>
          <figure className={styles.review}>
            <blockquote className={styles.review__text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className={styles.review__user}>
              <img src={user1} alt={"User"} className={styles.review__photo} />
              <div className={styles[`review__user-box`]}>
                <p className={styles[`review__user-name`]}>Nick Smith</p>
                <p className={styles[`review__user-date`]}>Nov 23rd 2017</p>
              </div>
              <div className={styles.review__rating}>7.8</div>
            </figcaption>
          </figure>
          <figure className={styles.review}>
            <blockquote className={styles.review__text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className={styles.review__user}>
              <img src={user2} alt={"User"} className={styles.review__photo} />
              <div className={styles[`review__user-box`]}>
                <p className={styles[`review__user-name`]}>Mary Thomas</p>
                <p className={styles[`review__user-date`]}>Sept 13 2017</p>
              </div>
              <div className={styles.review__rating}>9.3</div>
            </figcaption>
          </figure>

          <button className={"btn-inline"}>
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/*CTA*/}
      <div className={styles.cta}>
        <h2 className={styles[`cta__book-now`]}>
          Good news! We have 4 free rooms for your selected dates!
        </h2>
        <button className={styles.btn}>
          <span className={styles.btn__visible}>Book now</span>
          <span className={styles.btn__invisible}>Only 4 rooms left</span>
        </button>
      </div>
    </main>
  );
};

export default HotelView;
