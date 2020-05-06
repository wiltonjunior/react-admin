import React from "react";

// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

import Tabs from "@components/Tabs";

import "./styles.scss";

const Users = () => {
  return (
    <div className="Users">
      <Tabs
        title="Users:"
        headerColor="primary"
        tabs={[
          {
            tabName: "Bugs",
            tabIcon: BugReport,
            tabContent: (
              <div>1</div>
            ),
          },
          {
            tabName: "Website",
            tabIcon: Code,
            tabContent: (
              <div>2</div>
            ),
          },
          {
            tabName: "Server",
            tabIcon: Cloud,
            tabContent: (
              <div>3</div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Users;
