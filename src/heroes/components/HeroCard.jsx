import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `/heroes/${id}.jpg`;

  const caraterHero = <p className="card-text">{characters}</p>;

  return (
    <>
      <div className="card ms-3  animate__animated animate__fadeIn animate__fast" >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={heroImage} className="card-img-top" alt={superhero} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && caraterHero}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Más...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
