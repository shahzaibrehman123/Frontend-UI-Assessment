import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CollaboratorModal from "./CollaboratorModal/CollaboratorModal";
import "./VideoSection.css";
import Search from "./Search";
import u1 from "../../Assets/NavbarAssets/users/u1.svg";
import u2 from "../../Assets/NavbarAssets/users/u2.svg";
import v1 from "../../Assets/VideoSection/Videothumbnails/1.svg";
import v2 from "../../Assets/VideoSection/Videothumbnails/2.svg";
import v3 from "../../Assets/VideoSection/Videothumbnails/3.svg";
import v4 from "../../Assets/VideoSection/Videothumbnails/4.svg";
import v5 from "../../Assets/VideoSection/Videothumbnails/5.svg";
import v6 from "../../Assets/VideoSection/Videothumbnails/6.svg";
import v7 from "../../Assets/VideoSection/Videothumbnails/7.svg";
import v8 from "../../Assets/VideoSection/Videothumbnails/8.svg";
import v9 from "../../Assets/VideoSection/Videothumbnails/9.svg";
import v10 from "../../Assets/VideoSection/Videothumbnails/10.svg";
import Card from "./Card";
import CurrentDate from "../../Utils/CurrentDate";

function VideoSection() {
  const [selectedButton, setSelectedButton] = useState("All");
  // eslint-disable-next-line
  const [latestDate, setLatestDate] = useState("4 Sep, 2023");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collaborators, setCollaborators] = useState([
    { id: 1, image: u1 },
    { id: 2, image: u2 },
  ]);
  const addCollaborator = (newCollaboratorImage) => {
    // Use a default image (u2) if newCollaboratorImage is empty or falsy
    const imageToUse = newCollaboratorImage || u2;

    // Create a new collaborator object with a unique ID
    const newCollaboratorId = collaborators.length + 1;
    const newCollaborator = {
      id: newCollaboratorId,
      image: imageToUse,
    };

    // Update the state to include the new collaborator
    setCollaborators([...collaborators, newCollaborator]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const cardData = [
    { title: "Video 1", description: "Created at 23 sep,2023", img: v1 },
    { title: "Video 2", description: "Created at 23 sep,2023", img: v2 },
    { title: "Video 3", description: "Created at 23 sep,2023", img: v3 },
    { title: "Video 4", description: "Created at 23 sep,2023", img: v4 },
    { title: "Video 5", description: "Created at 23 sep,2023", img: v5 },
    { title: "Video 6", description: "Created at 23 sep,2023", img: v6 },
    { title: "Video 7", description: "Created at 23 sep,2023", img: v7 },
    { title: "Video 8", description: "Created at 23 sep,2023", img: v8 },
    { title: "Video 9", description: "Created at 23 sep,2023", img: v9 },
    { title: "Video 10", description: "Created at 23 sep,2023", img: v10 },
  ];

  return (
    <div className="parent-section">
      <div className="upper-section">
        <div className="left-section-container">

         <div className="video-area">
         <div className="recent-vid-container">
            <div className="title-class">Recent Videos</div>
            <div id="arrow-container">
              <KeyboardArrowDownIcon />
            </div>
          </div>

          <div className="re-gre-cont">
            <span id="subheading">Recently created videos</span>
            <div style={{ marginTop: "5px" }}>
              <div id="green-box">
                <div id="date-text">
                  <CurrentDate
                    onUpdateDate={(newDate) => setLatestDate(newDate)}
                  />
                </div>
              </div>
            </div>
          </div>
         </div>
          
        </div>
        <div>
          <div className="search-input-container">
            <Search />
          </div>
        </div>
      </div>
      <div className="middle-section">
        <div className="parent-btn-container">
          <div className="btn-container">
            <div
              className={`outer-layer ${
                selectedButton === "All" ? "selected" : ""
              }`}
              onClick={() => handleButtonClick("All")}
            >
              All
            </div>
            <div
              className={`outer-layer ${
                selectedButton === "Ads video" ? "selected" : ""
              }`}
              onClick={() => handleButtonClick("Ads video")}
            >
              Ads video
            </div>
            <div
              className={`outer-layer ${
                selectedButton === "Ai generated video" ? "selected" : ""
              }`}
              onClick={() => handleButtonClick("Ai generated video")}
            >
              Ai generated video
            </div>
            <div
              className={`outer-layer ${
                selectedButton === "Marketing video" ? "selected" : ""
              }`}
              onClick={() => handleButtonClick("Marketing video")}
            >
              Marketing video
            </div>
          </div>
        </div>
        <div className="collaborator-container">
          <div className="collaborators-video">
            <div className="colab-head">
              Collaborators({collaborators.length}):
            </div>
            <div className="img-area">
              {collaborators.map((collaborator) => (
                <img
                  key={collaborator.id}
                  src={collaborator.image}
                  alt="Avatar"
                  className="avatar"
                />
              ))}
            </div>
            <div>
              <div id="add-new-container" onClick={handleOpenModal}>
                + add new
              </div>
              <CollaboratorModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                addCollaborator={addCollaborator}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lower-section">
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
