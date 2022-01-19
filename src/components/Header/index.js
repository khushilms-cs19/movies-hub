import React from "react";
import { Link } from "react-router-dom";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import "@aws-amplify/ui-react/styles.css";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        {location.pathname !== "/" && <button onClick={()=>{
            props.signOut();
        }}>Sign Out</button>}
      </Content>
    </Wrapper>
  );
};

export default Header;