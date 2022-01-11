import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import imgbackground from "../..//assets/asset-background.svg";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
}
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #404EED;
    background-image: url(${imgbackground});
    background-size: cover;
    background-position: 50%;
    
`;

export const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;  
    overflow: hidden;
`;
export const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;

    > img {
        width: 115px;
    }
    div.container-elements{
        display: flex;
        align-items: center;

        > a {
            padding: 10px 15px;
            background-color: white;
            border-radius: 18px;
            color: black;
            font-size: 12px;

            &:hover {
                color: #5265f2;
            }

        }
        > span {
            position: relative;
            top: 4px;
            margin-left: 20px;
            text-align: center;
            

            > .icon-hambu {
                font-size: 35px;
                color: white;
                
            }
        }
        
    }
    @media only screen and (max-width: 1024px) {
        justify-content: space-between;
        padding: 0 40px;

        > nav {
            display: none;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;

    > li {
        padding: 10px 20px;
        > a{
            color: white;
            font-size: 15px;
            font-weight: bold;
            transition: 1s;

            &:hover {
                border-bottom: 1px solid white;
            }
        }
    }
`;


export const ContainerContent = styled.article`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: end;
    padding-top: 90px;
    
    > img:first-of-type {
        width: 650px;
        position: relative;
        left: 50px;
    }
    > div {
        min-width: 800px;
        max-width: 800px;
        text-align: center;
        color: white;
        padding: 50px 0 90px;
       
        > div.container-heanding {
           width: 60%;
           margin: 0 auto;

            > h1 {
                font-size: 65px;
                padding-bottom: 20px;
                font-weight: 800;
                line-height: 1;
            }
        }
        > p {
            line-height: 1.4;
            font-size: 1.3rem;
        }
        > div.button-down{
            display: flex;
            justify-content: center;
            padding-top: 20px;

            > span {
                
                padding: 15px 20px;
                margin: 10px;
                border-radius: 30px;
            }
            > span:nth-of-type(1) {
                background-color: white;
                transition: 1s;
               
                > a {
                    color: black;
                    transition: 1s;
                    font-size: 20px;
                    
                }
                &:hover {
                    box-shadow: 1px 4px 5px rgba(0, 0, 0, .5);
                }
                &:hover > a {
                    color: #5265f2;
                   
                }
            }
            > span:nth-of-type(2) {
                background-color: #000000;
                transition: 1s;
                > a {
                    color: white;
                    font-size: 20px;
                }
                &:hover {
                    background-color: #353535;
                    box-shadow: 1px 2px 4px black;
                }
            }
        }
    }
    > img:last-of-type {
        width: 650px;
        position: relative;
        left: -40px;
       
    }

    @media only screen and (max-width: 1024px) {
        justify-content: start;
        padding-left: 40px;
        padding-top: 30px;

        > img:first-of-type {
            display: none;
        }

        > div {
            min-width: 60%;
            max-width: initial;
            text-align: initial;
            padding-bottom: 130px;
            z-index: 1;

            > p {
                font-size: 90%;
            }
            > div.container-heanding {
                width: 100%;
            }
            > div.button-down {
                flex-wrap: wrap;
                justify-content: start;
                
            }

        }


        > img:last-of-type {
            width: 580px;
            left: -20%;
           
        }
    }

    @media only screen and (max-width: 768px) {
        justify-content: center;    
        flex-wrap: wrap-reverse;
        align-items: center;
        padding: 0 20px;

        > div {
            width: 100%;
            padding-bottom: 40px;
            
            > div.container-heanding {
                width: 100%;

                > h1 {
                    font-size: clamp(24px,5vw,44px);
            
                } 
            }
            
        }

        > img:first-of-type {
            display: initial;
            position: relative;
            left: -60px;
            width: 100%;
            
        }
        > img:last-of-type {
            display: none;
        }
    }
`;

export const Section =  styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 80px 0;
    max-width: 1400px;

    > article {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        
        > img {
            width: 55%;
            padding-right: 80px;
           
        }
       
        > div {
            width: 400px;

            > h2 {
                font-size: 3rem;
                font-weight: 800;
            }
            > p {
                padding-top: 25px;
                font-size: 1rem;
                text-align: left;
                line-height: 1.7;

            }
        }
    }
    @media only screen and (max-width: 768px) {
        > article {
            flex-wrap: wrap;
        }
        > article {
            > img, > div {
                width: 100%;
                padding: 40px;
                font-size: 16px;
            }
            > div > h2 {
                font-size: 24px;
            }
           
        }
    }
`;

export const SectionTwo = styled.section`
    width: 100%;
    background-color: #F6F6F6;

    > article.container-section-two {
        display: flex;
        width: 100%;
        margin: 0 auto;
        max-width: 1200px;
        align-items: center;
        justify-content: center;
        padding: 140px 30px;

        > div {
            max-width: 400px;
            > h2 {
                font-size: 2.8rem;
                padding-bottom: 25px;
            }
            > p {
                font-size: .9rem;
                line-height: 2;
            }
        }

        > img {
            margin-left: 50px;
            width: 50%;
            max-width: 650px;
        }
        @media only screen and (max-width: 768px) {
            flex-wrap: wrap-reverse;
            padding: 70px 0;

            > div {
                width: 90%;
                max-width: none;

                > h2 {
                    font-size: 1.8rem;
                    padding: 20px 0;
                }
            }
            > img {
                width: 90%;
                max-width: none;
            }
        }
    }
`;

export const SectionThree = styled.section`
    background-color: red;
`;