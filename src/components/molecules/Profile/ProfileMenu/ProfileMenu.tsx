import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../store/reducers/user.reducer";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    navigate("auth");
  };

  return (
    <div
      className="py-1 "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <ul>
        <li
          onClick={logoutUser}
          className="w-full cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
