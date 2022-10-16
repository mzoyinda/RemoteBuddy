import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 77px;
    background-color: #ffffff;
    padding: .5rem 4rem;

    .logo_container {
        width: 101.89px;
        height: 50.92px;
    }

    .timer_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 0px;
        width: 140px;
        height: 36px;

        .timer_btn {
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .timer_text {
            font-family: 'Poppins', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
            display: flex;
            align-items: center;
            color: #000000;
        }
    }
`