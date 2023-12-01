import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import DeletePopup from "./components/DeletePopup";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "./redux/slices/itemSlice";

const HeaderDiv = styled.div`
  background-color: #1e633f;
  width: 100%;
  height: 80px;
  color: white;
  display: flex;
  align-items: center;
  & > div:first-child {
    display: flex;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
  }
`;
const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  justify-content: space-between;
`;
const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  img {
    width: 50px;
  }
  span {
    img {
      width: 15px;
    }
  }
`;

const ComponentDiv = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 160px;
  color: black;
  display: flex;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;
    p {
      img {
        width: 10px;
        height: 15px;
      }
      span {
        border-bottom: 1px solid black;
      }
    }
    div {
      display: flex;
    }
    & > div:nth-child(2) {
      justify-content: space-between;
    }
  }
`;
const ButtonDiv = styled.div`
  div {
    gap: 20px;
  }
  button {
    background-color: #1e633f;
    border: 1px solid #1e633f;
    border-radius: 25px;
    padding: 15px 30px;
    color: white;
  }
`;
const WhiteButton = styled.button`
  background-color: white !important;
  border: 1px solid #1e633f !important;
  border-radius: 25px !important;
  padding: 15px 30px !important;
  color: #1e633f !important;
`;
const ScrollDiv = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
const MainDiv = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const DetailDiv = styled.div`
  display: flex;
  width: 85%;
  padding: 28px 0;
  background-color: #ffffff;
  border: 2px solid #f4f4f4;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  & > div:first-child {
    border: none;
    p {
      padding: 0;
    }
    h1 {
      padding: 0;
    }
  }
  div {
    width: 250px;
    text-align: left;
    height: 180px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid grey;
    div {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      img {
        width: 25px;
        height: 25px;
      }
    }
    p {
      font-weight: 1000;
      color: grey;
      padding-left: 30px;
      margin-top: 20px;
    }
    h1 {
      font-size: 27px;
      padding-left: 30px;
      margin-top: 5px;
    }
  }
`;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  background-color: #ffffff;
  border: 2px solid #f4f4f4;
  border-radius: 15px;
  align-items: center;
  margin-bottom: 40px;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    width: 92%;
    margin-top: 40px;
    & > div:first-child {
      width: 500px;
      border-radius: 25px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      border: 1px solid lightgrey;
      padding: 0 25px;
      align-items: center;
      p {
        color: grey;
      }
      img {
        width: 25px;
        height: 25px;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      height: 50px;
      gap: 50px;
    }
  }
`;

const TableDiv = styled.div`
  width: 92%;
  margin-top: 30px;
  & > div:first-child {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 25px 25px 0 0;
    height: 50px;
    font-size: 20px;
    color: gray;
    div {
      width: 10%;
    }
  }
`;
const RowDiv = styled.div`
  width: 100%;
  & > div:last-child {
    border: none;
  }
  div {
    border-bottom: 1px solid gray;
    gap: 50px;
    display: flex;
    font-size: 18px;
    color: #808080;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      gap: 20px;
      margin-left: 20px;
      border: none;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

const StatusDiv = styled.div`
  width: 425px;
  height: 120px;
  background-color: #f9f9f9;
  div {
    width: 250px;
    margin-left: 0 !important;
  }
  img {
    width: 20px !important;
    height: 20px !important;
    cursor: pointer;
  }
  p {
    margin-right: 25px;
  }
`;
const StatusButton = styled.button`
  background-color: ${(props) => {
    switch (props.status) {
      case "Approved":
        return "#3DCA72";
      case "Missing - Urgent":
        return "#DB2114";
      case "Missing":
        return "#F66D44";
      default:
        return "transparent";
    }
  }};
  border-radius: 25px;
  border: none;
  padding: 15px 30px;
  color: white;
  margin-left: auto;
  margin-right: auto;
`;
const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);

  const [missing, setMissing] = useState(false);
  const [item, setItem] = useState(0);

  const handleClick = (newStatus, itemId) => {
    dispatch(updateStatus({ newStatus, itemId }));
  };
  return (
    <div className="App">
      <div>
        <HeaderDiv>
          <div>
            <MenuDiv>
              <h1>Reeco</h1>
              <p>Store</p>
              <p>Orders</p>
              <p>Analytics</p>
            </MenuDiv>
            <ItemDiv>
              <img src="/images/cart-icon.png" alt="/" />
              <p>
                Hello, James{" "}
                <span>
                  <img src="/images/down-arrow.png" alt="/" />
                </span>
              </p>
            </ItemDiv>
          </div>
        </HeaderDiv>
        <ComponentDiv>
          <div>
            <div>
              <p>
                Orders &nbsp;&nbsp;
                <img src="/images/black-arrow.png" alt="/" /> &nbsp;&nbsp;
                <span>Order32457ABC</span>
              </p>
            </div>
            <ButtonDiv>
              <h1>Order32457ABC</h1>
              <div>
                <WhiteButton>Back</WhiteButton>
                <button>Approve Order</button>
              </div>
            </ButtonDiv>
          </div>
        </ComponentDiv>
      </div>
      <ScrollDiv>
        <MainDiv>
          <DetailDiv>
            <div>
              <p>Supplier</p>
              <h1>East coast fruits & vegetables</h1>
            </div>
            <div>
              <p>Shipping date</p>
              <h1>Thu, Feb 10</h1>
            </div>
            <div>
              <p>Total</p>
              <h1>$ 15,028.3</h1>
            </div>
            <div>
              <p>Category</p>
              <div style={{ border: "none" }}>
                <img src="/images/item1.png" alt="/" />
                <img src="/images/item2.png" alt="/" />
                <img src="/images/item3.png" alt="/" />
                <img src="/images/item4.png" alt="/" />
              </div>
              <div style={{ alignItems: "flex-start", border: "none" }}>
                {" "}
                <img src="/images/item3.png" alt="/" />
                <img src="/images/item4.png" alt="/" />
                <img src="/images/item2.png" alt="/" />
                <img src="/images/item1.png" alt="/" />
              </div>
            </div>
            <div>
              <p>Department</p>
              <h1>300-444-678</h1>
            </div>
            <div>
              <p>Status</p>
              <h1>Awaiting your approval</h1>
            </div>
          </DetailDiv>
          <ProductDiv>
            <div>
              <div>
                <p>Search...</p>
                <img src="/images/search-icon.png" alt="/" />
              </div>
              <div>
                <WhiteButton>Add item</WhiteButton>
                <img src="/images/print-icon.png" alt="/" />
              </div>
            </div>
            <TableDiv>
              <div>
                <div style={{ width: "29%" }}>Product name</div>
                <div>Brand</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
                <div style={{ width: "29%" }}>Status</div>
              </div>
              <RowDiv>
                {items.map((item, index) => (
                  <div>
                    <div>
                      <img src="/images/avocado.jpg" alt="/" />
                      <p>
                        Chicken Breast Fillets, Boneless Matuu
                        <br />
                        maMrinated 6 Ounce Raw, Invivid
                      </p>
                    </div>
                    <p>
                      Hormel Black
                      <br />
                      Labelmany
                    </p>
                    <p>$60.67/6+1LB</p>
                    <p>
                      <span>0</span>x 6 * 1LB
                    </p>
                    <p>$200</p>
                    <StatusDiv>
                      <div>
                        {item.status && (
                          <StatusButton status={item.status}>
                            {item.status}
                          </StatusButton>
                        )}
                      </div>
                      {item.status !== "Approved" ? (
                        <img
                          onClick={() => {
                            handleClick("Approved", item.id);
                          }}
                          src="/images/correct-grey.png"
                          alt="/"
                        />
                      ) : (
                        <img src="/images/correct-green.png" alt="/" />
                      )}
                      {(item.status === "Approved" || item.status === "") && (
                        <img
                          onClick={() => {
                            setMissing(true);
                            setItem(item.id);
                          }}
                          src="/images/cancel-grey.png"
                          alt="/"
                        />
                      )}
                      {item.status === "Missing" && (
                        <img src="/images/cancel-orange.png" alt="/" />
                      )}
                      {item.status === "Missing - Urgent" && (
                        <img src="/images/cancel-red.png" alt="/" />
                      )}
                      <p>Edit</p>
                    </StatusDiv>
                  </div>
                ))}
              </RowDiv>
            </TableDiv>
          </ProductDiv>
        </MainDiv>
      </ScrollDiv>
      {missing && (
        <DeletePopup
          handleClick={handleClick}
          setMissing={setMissing}
          item={item}
        />
      )}
    </div>
  );
};

export default App;
