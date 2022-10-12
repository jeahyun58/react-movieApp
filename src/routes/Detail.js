import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [details, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setDetail(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading Detail</h1>
      ) : (
        <div>
          <h1>Title:{details.title}</h1>
          <img src={details.medium_cover_image} alt={details.title} />
          <h4>
            {details.genres
              ? details.genres.map((a) => <li key={a}>{a}</li>)
              : null}
          </h4>
          <a href={details.url}>URL : {details.url}</a>
        </div>
      )}
    </div>
  );
};

export default Detail;
