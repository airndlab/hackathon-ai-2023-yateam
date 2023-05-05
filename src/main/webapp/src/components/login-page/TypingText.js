import React from "react";
import {Container, Desktop, Mobile, TextLine} from "./styles/TypingTextStyles";

export default ({username = ''}) => {
    return (<Container>
        <Desktop>
            <TextLine>
                Добро пожаловать в каталог
            </TextLine>
            <TextLine>
                лучших практик, {username || '$username'}!
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
}