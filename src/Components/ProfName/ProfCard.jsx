import CallCard from "../CallCard";
import imageOne from "../../assets/images/Adam.jpeg";
import imageTwo from "../../assets/images/Aminah.jpeg";
import imageThree from "../../assets/images/Rashidah.jpeg";
import imageFour from "../../assets/images/Tobi.jpeg";

import "./profCard.css";
const ProfileCard = () => {
  return (
    <div>
      <h1 id="profCad">Profile Card</h1>

      <div className="profileArray">
        <CallCard
          image={imageOne}
          Name="Rashidah Fasasi"
          Age="22"
          Location="Johannasberg"
        />
        <CallCard
          image={imageTwo}
          Name="Aminah Bello"
          Age="35"
          Location="Dublin"
        />
        <CallCard
          image={imageThree}
          Name="Tobiloba Fasasi"
          Age="29"
          Location="Lagos"
        />
        <CallCard
          image={imageFour}
          Name="Adamson Oyenuga"
          Age="27"
          Location="London"
        />
      </div>
    </div>
  );
};

export default ProfileCard;
