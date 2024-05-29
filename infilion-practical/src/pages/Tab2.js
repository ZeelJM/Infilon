import { useNavigate } from "react-router-dom";

const Tab2 = () => {
  const navigate = useNavigate();

  const navigateToTab3 = () => {
    navigate("/tab3");
  };

  return (
    <div>
      <div className="bg-black text-white font-bold">Tab 2</div>
      <button onClick={navigateToTab3}>Go to Tab 3</button>
    </div>
  );
};

export default Tab2;
