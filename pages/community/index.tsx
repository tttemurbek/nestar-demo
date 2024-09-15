import { useState } from "react";

const CommunityList = () => {
    console.log("community component, pages routing");
    
  const [title, setTitle] = useState<string>("hello");
  return (
    <div>
      COMMUNITY LIST{" "}
      <button
        onClick={() => alert("YOU REALLY PRESSED ME BRO")}
        style={{ margin: "40px" }}
      >
        PRESS ME
      </button>{" "}
    </div>
  );
};

export default CommunityList;
