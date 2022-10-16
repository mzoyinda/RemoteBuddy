import styled from "styled-components";

export const WhiteNoise = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    gap: 29px;
    width: 100%;
    height: 500px;
    border-radius: 30px;

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 42px;

        .play {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0px 10px;
            gap: 33px;
            cursor: pointer;
            width: 115px;
            height: 35px;
            border-bottom: 3px solid #76BF4D;

            p {
                font-family: 'Poppins', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                color: #000015;
            }
        }

        .library {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0px 10px;
            gap: 10px;
            width: 118px;
            height: 24px;
            cursor: pointer;

            p {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #000015;
            }
        }
    }

    .sub_title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 264px;
        height: 68px;

        .white {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
            color: #76BF4D;
        }

        .info {
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            text-align: center;
            color: #000015;

        }
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 29px;
        width: 429px;
        height: 230px;
        list-style-type: none;

        li {
            width: 429px;
            height: 50px;
            border: 0.5px solid #BDBDBD;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 0 120px 0 40px;
        }
    }

    .import_cta {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #76BF4D;
    }
`