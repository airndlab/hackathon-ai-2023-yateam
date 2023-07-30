import React from 'react';
import {CopyRightText} from '../main-page/styles/MainPageStyles';
import {Link} from "./LinkStyle";

const Footer = () => {
  return (
    <div className="py-3 text-center">
      <CopyRightText>
        &copy; 2023 <Link href="https://airnd.ru" target="_blank" rel="noopener noreferrer">AI RnD Lab</Link> | YaTeam
        for Hackathon AI
      </CopyRightText>
    </div>
  );
};

export default Footer;
