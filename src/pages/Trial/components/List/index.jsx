import React from "react";
import IconButton from "@material-ui/core/IconButton";

import Axios from "@components/Axios";
import Icon from "@components/Icon";
import Table from "@components/Table";

import "./styles.scss";

const TrialList = ({ list = [], setItem, updateList }) => {
  const columns = [
    { title: "TRIAL_LIST_FULLNAME", field: "FirstName" },
    { title: "TRIAL_LIST_LASTNAME", field: "LastName" },
    {
      title: "TRIAL_LIST_FIELD_DAYS",
      field: "Days",
    },
    {
      title: "TRIAL_LIST_FIELD_LEFT",
      field: "Left",
    },
    {
      title: "TRIAL_LIST_OPTIONS",
      className: "options",
      component: (item) => {
        return (
          <>
            <IconButton onClick={() => setItem(item)} className="basic">
              <Icon size={30} name="edit" />
            </IconButton>
            <Axios
              api="trial"
              method="delete"
              others={item._id}
              onSuccess={updateList}
            >
              {({ submit }) => (
                <IconButton onClick={submit} className="basic">
                  <Icon size={30} name="delete_icon" />
                </IconButton>
              )}
            </Axios>
          </>
        );
      },
    },
  ];
  return (
    <div className="TrialList">
      <Table title="TRIAL_LIST_TABLE_TITLE" data={list} columns={columns} />
    </div>
  );
};

export default TrialList;
