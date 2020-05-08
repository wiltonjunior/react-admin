import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Translate from "@components/Translate";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import * as Material from "@material-ui/core/";
import styles from "@js/material-dashboard-react/components/buttonStyle.js";

import "./styles.scss";

const useStyles = makeStyles(styles);

const Button = (props) => {
  const classes = useStyles();
  const {
    color = 'primary',
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames(["Button"], {
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <Material.Button {...rest} classes={muiClasses} className={btnClasses}>
      <Translate>{props.children}</Translate>
    </Material.Button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  // use this to pass the classes props from Material-UI
  muiClasses: PropTypes.object,
  children: PropTypes.node
};

export default Button;
