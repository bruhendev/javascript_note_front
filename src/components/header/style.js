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

            ul {
                display: flex;

                li {               
                    a {
                        font-size: 1.6rem;
                        font-weight: 400;
                        color: #720e9e;
                    }
                }

                li:not(:last-child){
                   margin-right: 3.2rem;
                }

                .register {
                    border: 1px solid #720e9e;
                    padding: .8rem 1.6rem;
                    border-radius: .5rem;
                    transition: all 1s;

                    &:hover {
                        background-color: #720e9e;
                        color: white;
                    }
                }
            }
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
                background-color: white;
                transition: all 1s;
                overflow: hidden;
                
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    li {
                        margin-bottom: 3.2rem;
                    }

                    li:not(:last-child){
                        margin-right: 0;
                    }
                }
              
            }

            .active {
                height: 130px;  
            }
        }
    } 
`;
