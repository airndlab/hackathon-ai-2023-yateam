import React from "react";
import {Container, Desktop, Mobile, TextLine} from "./styles/TypingTextStyles";

const TypingText = ({username = ''}) => {
    return (<Container>
        <Desktop>
            <TextLine>
                Добро пожаловать в каталог лучших практик
            </TextLine>
            <TextLine>
                использования нейросетей в разработке ПО, {username || '$username'}!
            </TextLine>
        </Desktop>
        <Mobile>
            <TextLine>
                Добро пожаловать
            </TextLine>
            <TextLine>
                в каталог лучших
            </TextLine>
            <TextLine>
                практик, {username || '$username'}!
            </TextLine>
        </Mobile>
    </Container>);
};

export default TypingText
