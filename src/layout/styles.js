import styled from "styled-components";
import background from 'assets/background.png'

export const LayoutContain = styled.div`
    width: 100%;
    height: 100vh;
    
    .wrap {
        width: 100%;
        background-color: var(--mainGrey);
        height: calc(100vh - 77px);
        
        .flex-box{
            display: flex;
            justify-content: center;
            align-items: center;
            width: auto;
            height: auto;
            background-image: url(${background});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center top;

        }

        .card_contain {
            width: auto;
            height: auto;
            /* position: relative;
            left: 18rem;
            top: 0rem; */
        }
    }
`