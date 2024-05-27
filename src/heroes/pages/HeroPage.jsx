import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";


export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(()=> getHeroById(id), [id]) 
  
  const onNavigateReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvelpages" />;
  }

  return (
    <>
      <dir className="row mt-5  animate__animated animate__lightSpeedInRight">
        <div className="col-4">
          <img
            src={`/heroes/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>

        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance:</b> {hero.first_appearance}
            </li>
          </ul>

          <h5>Characters</h5>
          <p>{hero.characters}</p>

          <button className="btn btn-outline-info" onClick={onNavigateReturn}>
            Return
          </button>
        </div>
      </dir>
    </>
  );
};
