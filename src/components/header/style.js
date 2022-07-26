import styled from "styled-components";

export const Header = styled.header`
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 6rem;
        border-bottom: 2px solid silver;

        button {
            color: silver;
            border: none;
            display: flex;
            padding: 0 5px 0 5px;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            display: none;
            cursor: pointer;
            z-index: 99;

            .iconb{
                color: black;                
            }
        }

        div{
            height: 40px;
            
            img {
                max-height: 100%;
            }
        }

        nav {
            z-index: 98;
        }

        li {
            font-size: 2.4rem;
            font-weight: bold;
        }
    }

    @media (max-width: 750px) {
        .container {
            button {
                display: block;
            }

            nav {
                height: 0;
                display: none;
                position: absolute;
                top: 6rem;
                left: 0;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: end;

                transition: all 1s;
                overflow: hidden;

              
            }

            .active {
                height: 120px;  
            }
        }
    } 
`;
