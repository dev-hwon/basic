import React, { useState, useEffect, useReducer } from "react";
import { useContext } from "react";
import AddAuthor from "../../components/setting/AddAuthor";
import AuthorList from "../../components/setting/AuthorList";
import {
  CommonSummary,
  CommontitleH4,
  GridCol,
  GridWrap,
  Box,
} from "../../components/Style";
import { DatasContext, DatasDispatchContext } from "../../context/Golbal";

export default function Author() {
  const authorsList = useContext(DatasContext);
  const authorsDispatch = useContext(DatasDispatchContext);
  const { loading, errorMessage, authors } = authorsList;

  const reverseData = [...authors].reverse();

  const handleAdd = (addTarget) => {
    authorsDispatch({
      type: "AUTHORS_UPDATE",
      addTarget,
    });
  };

  const handleDelete = (deleteTarget) => {
    authorsDispatch({
      type: "AUTHORS_DELETE",
      authors,
      deleteTarget,
    });
  };
  return (
    <>
      <GridWrap colGap={16} colWidth="50%">
        <GridCol>
          <CommontitleH4 className="">글쓴이 목록</CommontitleH4>
          <CommonSummary>최대 20개의 목록을 만들 수 있어요.</CommonSummary>
        </GridCol>
        <GridCol>
          <Box align="right" style={{ borderRadius: "0" }}>
            <AddAuthor authors={authors} onAdd={handleAdd}></AddAuthor>
          </Box>
        </GridCol>
      </GridWrap>
      {loading ? (
        "loading.."
      ) : (
        <GridWrap colGap={16} colWidth="16.6666%">
          {reverseData.map((a) => (
            <GridCol key={a.id}>
              <Box className="authorlist" style={{ borderRadius: "0" }}>
                <AuthorList author={a} onDelete={handleDelete} />
              </Box>
            </GridCol>
          ))}
        </GridWrap>
      )}
      {errorMessage ? errorMessage : null}
    </>
  );
}
