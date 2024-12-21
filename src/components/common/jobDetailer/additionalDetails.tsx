import WorkDetailImg from "../../../assets/work_details.png";

const AdditionalDetails = () => {
  return (
    <div className="jobdetailer-additional-details">
      <div
        style={{
          fontSize: "20px",
          fontWeight: "500",
          marginLeft: "-20px",
          paddingLeft: "15px",
          borderLeft: "5px solid blue",
        }}
      >
        Additional Information
      </div>
      <div
        className="jobdetailer-addtional-items"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="jobdetailer-addtional-item">
          <div className="additional-item-left">
            <div className="additional-info-title" style={{ fontWeight: "500" }}>
              Work Detail
            </div>
            <div className="additional-info">
              Working days : <span style={{ color: "#666" }}> 5 Days</span>
            </div>
          </div>
        </div>
        <div className="additional-item-right">
          <img
            className="additional-item-right-img"
            src={WorkDetailImg}
            style={{ height: "90px", margin: "-25px" }}
            alt="additional-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
