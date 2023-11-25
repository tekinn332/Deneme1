// Home.js
import { Routes, Route, useNavigate } from "react-router-dom";
import Api from "./Api";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>

<Route path="/api" element={<Api />} />
<button onClick={()=>navigate("Api")} >Api</button>
    
    </div>
  );
};


export default Home;
