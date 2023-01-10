import { ReactElement } from "react";
import GiftOptions from "./Gifts";
import GiftsForm from "./GiftsForm";
import GiftsHeader from "./GiftsHeader";

export enum GiftType {
  LIKE,
  WANT,
  NEED
};


const GiftPage = (): ReactElement => {
    return (
      <>
          <GiftsHeader/>
          <GiftOptions/>
      </>
    )
};

export default GiftPage;