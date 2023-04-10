import styled from "styled-components";

export const Container = styled.section`
  background-color: #232323;
  display: flex;
`;

export const Zoro = styled.div`
  cursor: pointer;
  background-image: url("https://wallpaperset.com/w/full/8/3/6/103461.jpg");
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  width: 33.33%;
  transition: 0.3s;
  img {
    width: 0px;
    transition: 0.7s;
  }
  &.on {
    width: 80%;
    padding: 30px 50px;
    img {
      width: 880px;
      opacity: 1;
    }
  }
  &.off {
    width: 10%;
    background-position: -1250px center;
    filter: grayscale(80%);

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const Luffy = styled.div`
  cursor: pointer;
  background-image: url("https://wallpaperset.com/w/full/3/3/6/110190.jpg");
  background-position: -275px center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  width: 33.33%;
  transition: 0.3s;
  img {
    width: 0px;
    transition: 0.7s;
  }
  &.on {
    background-position: right center;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 700px;
      opacity: 1;
    }
  }
  &.off {
    width: 10%;
    background-position: -470px center;
    filter: grayscale(80%);

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const Sanji = styled.div`
  cursor: pointer;
  background-image: url("https://wallpaper.dog/large/17267361.jpg");
  background-position: -900px center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 100vh;
  width: 33.33%;
  img {
    width: 0px;
    transition: 0.7s;
  }
  &.on {
    width: 80%;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 50px;
    img {
      width: 880px;
      opacity: 1;
    }
  }
  &.off {
    width: 10%;
    background-position: -1140px center;
    filter: grayscale(80%);

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

export const Back = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: 2px solid #000;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.3s;
  height: 40px;
  border-radius: 3px;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
