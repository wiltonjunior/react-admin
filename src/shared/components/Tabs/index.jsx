import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import Icon from "@components/Icon";
import Card from "@components/CardFull";
import CardBody from "@components/CardFull/CardBody.js";
import CardHeader from "@components/CardFull/CardHeader.js";

import Translate, { dict } from "@components/Translate";

import styles from "@js/material-dashboard-react/components/customTabsStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
  });
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? (
          <div className={cardTitle}>
            <Translate>{title}</Translate>
          </div>
        ) : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.icon) {
              icon = {
                icon: <Icon name={prop.icon} />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={dict.translate(prop.name)}
                {...icon}
              ></Tab>
            );
          })}
        </Tabs>
      </CardHeader>
      <CardBody>
        {tabs.map((prop, key) => {
          return (
            <div key={key} className={key === value ? "show" : "hide"}>
              {prop.content}
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      con: PropTypes.object,
      content: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
};
