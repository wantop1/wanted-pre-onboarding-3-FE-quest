import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const MainSideBar = () => {
  return (
    <div className="side-bar">
      <Menu vertical className="vh-100">
        <Menu.Item>
          <Menu.Header>Pages</Menu.Header>

          <Menu.Menu>
            <Menu.Item name="pageA">
              <Link to="/pageA">page A</Link>
            </Menu.Item>

            <Menu.Item name="pageB">
              <Link to="/pageB">page B</Link>
            </Menu.Item>

            <Menu.Item name="pageC">
              <Link to="/pageC">page C</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default MainSideBar;
