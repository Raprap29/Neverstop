import React from "react";
export const Card = ({ images, titleImg }) => {
    return (
      <div style={{ width: "300px", height: "200px", padding: "10px", borderRadius: "10px" }}>
        <div style={{ width: "100%", height: "100%", backgroundImage: `url(${images})`, backgroundSize: "cover", borderRadius: "10px", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "7px 7px 9px rgba(0,0,0,0.40)"  }}>
          <p style={{ fontFamily: "Inria Serif', serif;", color: "#000", fontSize: "17px", textAlign: "center", backgroundColor: "#fff", padding: ".5rem 1.5rem", borderRadius: "10px", boxShadow: "7px 7px 9px rgba(0,0,0,0.40)"  }}>{titleImg}</p>
        </div>
      </div>
    );
};

export const CardImages = ({images, category, description}) =>{
  return(
    <div style={{ width: "100%", height: "280px", padding: "10px", borderRadius: "10px" }}>
        <div style={{ width: "100%", height: "100%", backgroundImage: `url(${images})`, backgroundSize: "cover", borderRadius: "10px", padding: "10px", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "7px 7px 9px rgba(0,0,0,0.40)", position: "relative" }}> 
        <div className="bg-[rgba(0,0,0,0.50)] w-full p-1 absolute top-4 h-[160px]">
          <div className="p-3">
            <p className="text-white lemon text-[25px]">{category}</p>
            <p className="text-white text-light text-[16px] text-justify leading-[30px] mt-1">{description}</p>
          </div>
        </div>
        </div>
    </div>
  )
}
