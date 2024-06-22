import React from "react";

import Card from "./Card";
import { CardInterface } from "../../../interfaces/card.interface";

const index: React.FC<CardInterface> = ({ title, icon, children }) => {
  return (
    <Card title={title} icon={icon}>
      {children}
    </Card>
  );
};

export default index;
