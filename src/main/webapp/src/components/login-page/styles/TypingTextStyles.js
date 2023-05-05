import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 2rem;
    font-size: 0.8rem;
    color: rgba(236, 236, 241, 1);
    
    @media (max-width: 600px) {
        width: 300px;
    }
`;

export const Mobile = styled.h1`
    display: none;
    
    @media (max-width: 600px) {
        display: block;
    }
`;

export const Desktop = styled.h1`
    @media (max-width: 600px) {
        display: none;
    }
`;

export const TextLine = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: calc(100vw - 20px);
    border-right: 0.15em solid rgba(236, 236, 241, 1);
    margin: 0;
    
    &:first-child {
        animation: typing 1.75s steps(40, end),
        blink-caret 1s step-end 2 forwards;
        border-color: transparent;
    }
    
    &:last-child {
        width: 0;
        border-color: transparent;
        animation: typing 1.75s 1.75s steps(40, end) forwards,
        blink-caret 1s step-end 1.5s infinite;
    }
    
    @keyframes typing {
        0% {
            width: 0;
            text-overflow: clip;
        }
        99% {
            width: 100%;
            text-overflow: clip;
        }
        100% {
            width: fit-content;
            text-overflow: ellipsis;
        }
    }

    @keyframes blink-caret {
        from, to {
            border-color: transparent;
        }
        50% {
            border-color: rgba(236, 236, 241, 1);
        }
    }
    
    @media (max-width: 600px) {
        text-align: center;
        margin: auto;
        
        &:first-child {
            animation: typing 1.2s steps(40, end),
            blink-caret 1s step-end 1 forwards;
            border-color: transparent;
        }
    
        &:nth-child(2) {
            width: 0;
            border-color: transparent;
            animation: typing 1.2s 1.2s steps(40, end) forwards,
            blink-caret 1s step-end 1.2s 1 forwards;
        }
    
        &:last-child {
            width: 0;
            border-color: transparent;
            animation: typing 1.2s 2.4s steps(40, end) forwards,
            blink-caret 1s step-end 2.4s infinite;
        }
    }
`;