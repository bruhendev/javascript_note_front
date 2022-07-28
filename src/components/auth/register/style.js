import styled from "styled-components";

export const Container = styled.div`

    background-color: #720e9e;
    height: calc(100vh - 6rem);
    display: flex;
    align-content: center;
    align-items: center;
    

    .card {
        margin: 0 auto;
        width: 300px;
        border-radius: 5px;
        background-color: white;
        padding-top: 3.2rem;

        .image {
            margin: 0 auto;
            width: 200px;
            padding-bottom: 3.2rem;

            img {
                max-width: 100%;
            }
        }

        h3 {
            font-size: 1.6rem;
            font-weight: 400;
            color: darkgrey;
            text-align: center;
        }
    }


`;