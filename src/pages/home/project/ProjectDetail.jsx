import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CreditCardPage from "../../../components/CreditCardPage";

const ProjectDetail = () => {
  const { id } = useParams();
  const token = useSelector((state) => state.auth?.token);

  useEffect(() => {
    const fetchSingleProject = async () => {
      try {
        console.log("📌 Project ID from URL:", id);

        const res = await fetch(
          `https://aryo-be-1.onrender.com/api/project/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token ? `Bearer ${token}` : "",
            },
          }
        );

        const data = await res.json();

        console.log(" Single Project API Response:", data);
      } catch (error) {
        console.error(" Single Project API Error:", error);
      }
    };

    if (id) fetchSingleProject();
  }, [id, token]);

  return <CreditCardPage />;
};

export default ProjectDetail;
