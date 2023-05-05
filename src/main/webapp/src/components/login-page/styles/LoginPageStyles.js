import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgba(32, 33, 35, 1);
    font-family: 'Roboto Mono', monospace;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    color: rgba(236, 236, 241, 1);
    background-color: rgba(52, 53, 55, 1);
    border: 1px solid rgba(236, 236, 241, 0.5);
    border-radius: 4px;
    outline: none;
`;

export const Button = styled.button`
    position: relative;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgba(32, 33, 35, 1);
    background-color: rgba(236, 236, 241, 1);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    transition: background-color 0.3s, color 0.3s;
    z-index: 1;
    text-transform: uppercase;
    font-family: 'Roboto Mono', monospace;
    
    &:hover {
        text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
        0.025em 0.04em 0 #fffc00;
        animation: glitch 725ms infinite;
    }
    
    @keyframes glitch {
        0% {
            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
            0.025em 0.04em 0 #fffc00;
        }
        15% {
            text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff,
            0.025em 0.04em 0 #fffc00;
        }
        16% {
            text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
            -0.05em -0.05em 0 #fffc00;
        }
        49% {
            text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff,
            -0.05em -0.05em 0 #fffc00;
        }
        50% {
            text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
            0 -0.04em 0 #fffc00;
        }
        99% {
            text-shadow: 0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff,
            0 -0.04em 0 #fffc00;
        }
        100% {
            text-shadow: -0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff,
            -0.04em -0.025em 0 #fffc00;
        }
    }
`;