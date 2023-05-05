import React from "react";
import { StyledFooter, StyledP } from './styles/FooterStyles';

const Footer = () => {
  return (
      <StyledFooter>
        <div className="mx-auto flex justify-center items-center">
          <StyledP className="text-gray-400">Copyright &copy; 2023
            YaTeam. Все права защищены.</StyledP>
        </div>
      </StyledFooter>
  );
};

export default Footer;
