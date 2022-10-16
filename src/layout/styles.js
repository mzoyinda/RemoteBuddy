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

        }

        .card_contain {
            width: 987.15px;
            height: 625.49px;
            /* position: relative;
            left: 18rem;
            top: 0rem; */
            background-image: url(${background});
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center top;
        }
    }
`