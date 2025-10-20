import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`

  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;

    box-sizing: border-box;
    display: block;
    align-items: center;
    justify-content: center;
    height: 60px;
    background-color: #f0d907;
    color: #4b4d4f;
    transition: background-color 0.3s ease;

    & h3{
        margin: 0;
        padding: 10px;
    }

    &:hover {
        background-color: #e3b905;
    }

    &:hover nav{
        opacity: 1;
    }

    & nav {
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.5s ease;
        position: relative;
        top: 18px;
        display: flex;
        width: 100%;
        height: 30px;
        gap: 20px;
        background-color: #000;
        color: white;
    }

    & nav ul {
        display: flex;
        gap: 0 20px;
        list-style: none;
        padding: 0;
        margin: 0;
        align-items: center;
        height: 100%;
    }

    & nav ul li {
        height: 100%;
        display: flex;
    }

    & nav ul li a {
        text-decoration: none;
        line-height: 30px;
        color: white;
        display: block;
        height: 100%;
    }

    & .yellow, & a:hover{ color: #f0d907; }
`;
