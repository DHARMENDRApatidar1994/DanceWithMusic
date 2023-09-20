import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./Dash.css";
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(1);
  const first = useRef(null);
  const rightNAV = (e) => {
    e.preventDefault();
    if (flag === 1) {
      gsap.to(first.current, {
        left: "0%",
        duration: 1,
      });
      setFlag(0);
    } else {
      gsap.to(first.current, {
        left: "-16%",
        duration: 1,
      });

      setFlag(1);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <>
      <div id="main1">
        <div className="rightNav" ref={first}>
          <h1 style={{marginLeft: "20px"}} onClick={rightNAV}>
            Dashboard <i className="ri-menu-4-line"></i>
          </h1>
          <div className="txtdash">
            <Sidebar>
              <Menu
                menuItemStyles={{
                  button: {
                    // the active class will be added automatically by react router
                    // so we can use it to style the active menu item
                    color: "black",
                    [`&.active`]: {
                      backgroundColor: "white",
                      color: "black",
                    },
                  },
                }}
              >
                <SubMenu label="Video">
                  <MenuItem onClick={() => navigate("/admin/addHomePageVideo")}>
                    Add Video in Home Page
                  </MenuItem>
                  <MenuItem onClick={()=>navigate('/admin/deleteHomePageVideos')}> 
                    Delete Video 
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Events">
                  <MenuItem onClick={() => navigate("/admin/addSalsaEvent")}>
                    Add Salsa Event
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/admin/addBhopalEvent")}>
                    Add Bhopal Event
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/admin/addGrooveEvent")}>
                    Add Groove Event
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/admin/addDashboardEvent")}>
                    Add Dashboard Event
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/admin/deleteDashboardEvent")}>
                    Delete Dashboard Event
                  </MenuItem>
                  {/* <MenuItem onClick={() => navigate("/admin/deleteEvent")}>
                    Event Settings
                  </MenuItem> */}
                </SubMenu>
                <SubMenu label="Gallery">
                  <MenuItem onClick={() => navigate("/admin/addMusicGallery")}>
                    Add Music Gallery
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/admin/deleteMusicGalleryImages")}>
                    Delete Music Gallery Images
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/admin/addDanceGallery")}>
                    Add Dance Gallery
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/admin/deleteDanceGalleryImages")}>
                    Delete Dance Gallery images
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Enquiry" >
                  <MenuItem onClick={()=>navigate('/admin/enquiry')} > All Enquiries </MenuItem>
                </SubMenu>
                <MenuItem onClick={logout}> Logout </MenuItem>
              </Menu>
            </Sidebar>
          </div>
        </div>

        {/* <h1>Admin Panel</h1> */}
      </div>
    </>
  );
};

export default Dashboard;
