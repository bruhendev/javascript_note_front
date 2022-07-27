import styled from "styled-components";

export const Container = styled.div`

    background-color: #720e9e;
    height: calc(100vh - 6rem);
    padding-top: 200px;
    

    .card {
        margin: 0 auto;
        width: 300px;
        border-radius: 5px;
        background-color: white;
        padding-top: 50px;

        .image {
            margin: 0 auto;
            width: 200px;
            padding-bottom: 50px;

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