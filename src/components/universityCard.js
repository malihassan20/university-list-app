const UniversityCard = ({ name, country, website }) => (
  <div className="university-card-container">
    <p className="name">{name}</p>
    <p className="country">
      <b>Country:</b> {country}
    </p>
    <p className="website">
      <b>Website:</b>{" "}
      <a href={website} target="_blank" rel="noreferrer">
        {website}
      </a>
    </p>
  </div>
);

export default UniversityCard;
