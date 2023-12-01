import React from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  z-index: 1;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;
const PopupDiv = styled.div`
  padding: 50px 30px;
  max-width: 500px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  gap: 30px;
  img {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  h1 {
    font-size: 26px;
  }
  & > div:first-child {
    width: 100%;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 15px;
    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
  }
  & > div:last-child {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 30px;
    h1 {
      font-size: 22px !important;
    }
  }
`;

const DeletePopup = ({ handleClick, setMissing, item }) => {
  return (
    <PopupContainer>
      <PopupDiv>
        <div>
          <div>
            <h1>Missing product</h1>
            <img
              onClick={() => {
                setMissing(false);
              }}
              src="/images/cancel-grey.png"
              alt="/"
            />
          </div>
          <p>Is 'Chicken Breast Fillets,Boneless...'urgent?</p>
        </div>
        <div>
          <h1
            onClick={() => {
              handleClick("Missing", item);
              setMissing(false);
            }}
          >
            No
          </h1>
          <h1
            onClick={() => {
              handleClick("Missing - Urgent", item);
              setMissing(false);
            }}
          >
            Yes
          </h1>
        </div>
      </PopupDiv>
    </PopupContainer>
  );
};

export default DeletePopup;
