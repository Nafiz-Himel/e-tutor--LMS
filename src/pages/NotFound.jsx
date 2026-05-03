import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import "./NotFound.css";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <h1>{t.notFound.heading}</h1>
        <h2>{t.notFound.subheading}</h2>
        <p>{t.notFound.text}</p>
        <Link to="/" className="home-link">{t.notFound.goHome}</Link>
      </div>
    </div>
  );
};

export default NotFound;
