import "./style.scss";
import cssIcon from "../../../assets/css-icon.png";
import htmlIcon from "../../../assets/html-icon.png";
import urlIcon from "../../../assets/url-icon.png";
const TextBox = () => {
  return (
    <div className="box-group">
      <div className="box-item">
        <div className="box-title">Lorem ipsum dolor sit amet</div>
        <div className="box-content">
          <img src={cssIcon} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
      </div>
      <div className="box-item">
        <div className="box-title">Lorem ipsum dolor sit amet</div>
        <div className="box-content">
          <img src={htmlIcon} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
      </div>
      <div className="box-item">
        <div className="box-title">Lorem ipsum dolor sit amet</div>
        <div className="box-content">
          <img src={urlIcon} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
