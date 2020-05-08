import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

import Axios from "@components/Axios";
import Card from "@components/Card";
import Modal from "@components/Modal";
import Button from "@components/Button";

import FormGroup from "./components/FormGroup";

const TrialAddEdit = (props) => {
  const { close, item, updateList } = props;

  const schema = {
    // enableReinitialize: true,
    initialValues: { ...item },
    validationSchema: Yup.object().shape({
      Left: Yup.string().required("REQUIRED"),
      Days: Yup.string().required("REQUIRED"),
      LastName: Yup.string().required("REQUIRED"),
      FirstName: Yup.string().required("REQUIRED"),
      Email: Yup.string()
        // .email("REQUIRED")
        .required("REQUIRED"),
    }),
  };

  const onSubmit = ({ values, submit, resetForm }) => {
    submit({ params: values });
    resetForm();
  };

  const footer = (submit) => {
    return <Button onClick={submit}>TRIAL_ADD_CARD_SEND</Button>;
  };

  const onSuccess = () => {
    close();
    updateList();
  };

  const add = ({ handleSubmit, ...formik }) => {
    console.log(formik);
    return (
      <Card title="TRIAL_ADD_CARD_TITLE" footer={() => footer(handleSubmit)}>
        <FormGroup {...props} formik={formik} />
      </Card>
    );
  };

  const edit = ({ handleSubmit, ...formik }) => {
    return (
      <Modal
        open={item}
        close={close}
        title="TRIAL_EDIT_MODAL_TILE"
        actions={<Actions onSubmit={handleSubmit} />}
      >
        <FormGroup {...props} formik={formik} />
      </Modal>
    );
  };

  const Actions = ({ onSubmit }) => {
    return (
      <div className="actions">
        <Button color="rose" onClick={() => close()}>
          BUTTON_CLOSE
        </Button>
        <Button onClick={onSubmit}>TRIAL_ADD_CARD_SEND</Button>
      </div>
    );
  };

  let params = {};
  if (item._id) {
    params = {
      method: "put",
      others: item._id,
    };
  } else {
    params = {
      method: "post",
    };
  }
  return (
    <div className="TrialAddEdit">
      <Axios api="trial" {...params} onSuccess={onSuccess}>
        {({ submit }) => (
          <Formik
            {...schema}
            onSubmit={(values, event) => onSubmit({ ...event, values, submit })}
          >
            {(formik) => (item._id ? edit(formik) : add(formik))}
          </Formik>
        )}
      </Axios>
    </div>
  );
};

export default TrialAddEdit;
