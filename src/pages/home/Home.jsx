import "./style.scss";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logoNCC1.png";
import TextBox from "./textBox/TextBox";
const Home = () => {
  return (
    <div className="home">
      <div className="home-logo">
        <img src={logo} alt="" />
      </div>

      <div className="home-content">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </span>
      </div>

      <div className="home-box-content">
        <TextBox />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
