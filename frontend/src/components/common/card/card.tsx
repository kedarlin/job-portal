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
        className="card-content"
        style={{
          backgroundImage: `url('${imagePath}')`,
          backgroundColor: `${color}`,
        }}
      >
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">
          {description.split(" ").map((word, index) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Card;
