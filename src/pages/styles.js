import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 28px;
  width: 374px;
  height: 193px;
  position: relative;
  left: 12rem;

  .text {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  button {
    width: 173px;
    height: 39px;
    background-color: var(--mainGren);
    border-radius: 8px;
    cursor: pointer;
    border: none;
    outline: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    margin-top: 20px;

    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #f6f6ff;

    a {
      color: white;
    }
  }

  .white-button {
    border: 1px solid #76bf4d;
    border-radius: 8px;
    color: var(--mainBlack);
    background-color: var(--mainWhite);

    a {
        color: var(--mainBlack);
    }
  }

  .line_contain {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;
    width: 100%;
    height: 16px;

    .line {
      width: 50px;
      height: 0px;
      border: 1px solid #000000;
    }

    .line_text {
      font-family: "Open Sans", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      color: #000000;
    }
  }

  .libraries_wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;
    width: 280px;
    height: 40px;
    margin-top: 10px;

    .library {
      width: 40px;
      height: 40px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      display: flex;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  button + button {
    margin-left: 1rem;
  }
`;
