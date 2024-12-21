import React from "react";

interface DetailCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const DetailCard: React.FC<DetailCardProps> = ({ icon, title, value }) => {
  return (
    <div
      className="detail-card"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "10px",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          padding: "15px",
          backgroundColor: "#e9e9e9",
          borderRadius: "5px",
        }}
      >
        {icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ color: "#666" }}>{title}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default DetailCard;
