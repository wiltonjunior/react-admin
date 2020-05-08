import React, { useState } from "react";

// @material-ui/icons
import Tabs from "@components/Tabs";
import List from "./components/List";
import AddEdit from "./components/AddEdit";

import Axios from "@components/Axios";

import "./styles.scss";

const Trial = () => {
  const [run, setRun] = useState(1);
  const [list, setList] = useState([]);
  const [item, setItem] = useState({});

  const onSuccess = ({ data }) => {
    setItem({});
    setList([...data]);
  };

  const updateList = () => {
    setRun(run + 1);
  };

  const tabs = [
    {
      icon: "list",
      name: "TRIAL_TAB_LIST",
      content: <List list={list} setItem={setItem} updateList={updateList} />,
    },
    {
      icon: "add",
      name: "TRIAL_TAB_ADD",
      content: (
        <AddEdit
          item={item}
          updateList={updateList}
          close={() => setItem({})}
        />
      ),
    },
  ];

  return (
    <Axios run={run} api="trial" onSuccess={onSuccess}>
      <div className="Trial">
        <Tabs title="TRIAL_TABS_TITLE" headerColor="primary" tabs={tabs} />
      </div>
    </Axios>
  );
};

export default Trial;
