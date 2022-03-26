import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function CollegeCard({ name, Phone, email, src }) {
  const navigate = useNavigate();
  return (
    <div className="hold">
      <div class="card">
        <div class="front">
          <img src={src || "abes.jpg"} alt="" />
        </div>
        <div class="back">
          <div class="back-content middle">
            <h2>{name}</h2>
            <hr />
            <span>{Phone}</span>
            <hr />
            <span>{email}</span>
            <hr />
            <Button onClick={() => navigate("/detail")}>View Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeCard;
