import styledComponents from "styled-components";

export const Container = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0077b6;
`

export const TextContainer = styledComponents.div`
    color: white;
    font-size: 3rem;
    font-weight: bold;
    font-style: italic;
    line-height: 350px;
`

export const ButtonError = styledComponents.button`
    border-radius: 10px;
    font-size: 3rem;
    background-color: #00B4D8;
    color: white;
    cursor: pointer;
    border: none;
    padding: 16px;
    margin: 16px;
    margin-left: 50%;
    transform: translateX(-50%);
`