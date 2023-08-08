import { useNavigate } from "react-router-dom";
import { SideBarItems } from "../../types/SideBarTypes";
const SideBar = () => {
  const navigate = useNavigate();
  const sideBarItems: SideBarItems[] = [
    {
      id: 1,
      label: "Dashboard",
      navigateUrl: "/dashboard",
    },
    {
      id: 2,
      label: "User List",
      navigateUrl: "/userList",
    },
  ];
  return (
    <div className="">
      {sideBarItems.map((items) => (
        <p
          className="text-lg text-gray-500 bg-gray-300 p-2 cursor-pointer mb-2 rounded"
          onClick={() => navigate(`${items.navigateUrl}`)} key={items.id}
        >
          {items.label}
        </p>
      ))}
    </div>
  );
};

export default SideBar;
