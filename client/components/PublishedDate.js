import React from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const PublishedDate = ({ publishedAt }) => {
  return (
    <span>{format(new Date(publishedAt), "d MMM yyyy", { locale: ru })}</span>
  );
};

export default PublishedDate;
