import React from "react";

import Translate from "@components/Translate";

import "./styles.scss";

const Card = (props) => {
  const {
    title,
    footer,
    subtitle,
    disabled,
    component,
    checkGroup,
    params = {},
    basic = false,
  } = props;

  const getComponent = () => {
    if (component && !disabled) {
      return <div className="card_component">{component()}</div>;
    } else if (checkGroup) {
      return <div className="card_component">{checkGroup()}</div>;
    }
  };

  return (
    <div className={`Card ${basic ? "basic" : ""}`}>
      <div className="card_header">
        <div className="title">
          <h3>
            <Translate>{title}</Translate>
          </h3>
          <span>
            <Translate parameters={params.subtitle}>{subtitle}</Translate>
          </span>
        </div>
        {getComponent()}
      </div>
      <div className="content">{props.children}</div>
      {footer ? <div className="card_footer">{footer()}</div> : null}
    </div>
  );
};

export default Card;
