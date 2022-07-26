import styled from "styled-components";

export const Section = styled.section`
    background-color: #720e9e;
    height: calc(100vh - 6rem);

    .container {
        display: flex;
        align-items: center;

        .title {
            flex: 1;
            h2 {
                width: 440px;
                font-size: 3.6rem;
                color: white;
                font-weight: bold;
                line-height: 4.2rem;
            }

            p {
                width: 500px;
                font-size: 1.6rem;
                color: white;
                margin-top: 2.4rem;
            }

            button {
                font-weight: bold;
                font-size: 2.4rem;
                border: 1px solid white;
                color: white;
                background-color: #720e9e;
                padding: 1rem 1.6rem;
                border-radius: 3px;
                margin-top: 4rem;
                cursor: pointer;
                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

                transition: opacity 0.3s;

                &:hover{
                    opacity: 0.5;
                }
            }

        }

        .image {
            flex: 1;
            width: 900px;
            padding-left: 6rem;
            img {
                margin-top: 170px;
            }
        }
    }
`;