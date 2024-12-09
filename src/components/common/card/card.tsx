import "./card.css";

type cardProp = {
  title: string;
  description: string;
  color: string;
  imagePath: string;
};

function Card({ title, description, imagePath, color }: cardProp) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: `${color}`,
        }}
      >
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
}

export default Card;
