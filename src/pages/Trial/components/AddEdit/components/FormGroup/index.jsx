import React, { useEffect, useState } from "react";

import Utils from "@utils";
import Input from "@components/Input";
import { Grid } from "@material-ui/core";

const FormGroup = (props) => {
  const { formik } = props;
  const { handleBlur, handleChange, values, errors } = formik;

  const [item, setItem] = useState({});

  useEffect(() => {
    setItem({...values});
  }, [values]);

  console.log(item)

  return (
    <Grid className="form" container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Input
          {...props}
          required
          name="FirstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={Utils.getValue(item, "FirstName")}
          error={Utils.getValue(errors, "FirstName")}
          helperText={Utils.getValue(errors, "FirstName")}
          label="TRIAL_ADD_INPUT_LABEL_FIRST_NAME"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Input
          {...props}
          required
          name="LastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={Utils.getValue(item, "LastName")}
          error={Utils.getValue(errors, "LastName")}
          helperText={Utils.getValue(errors, "LastName")}
          label="TRIAL_ADD_INPUT_LABEL_LAST_NAME"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Input
          {...props}
          required
          name="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={Utils.getValue(item, "Email")}
          error={Utils.getValue(errors, "Email")}
          helperText={Utils.getValue(errors, "Email")}
          label="TRIAL_ADD_INPUT_LABEL_EMAIL"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Input
          {...props}
          required
          name="Days"
          onChange={handleChange}
          onBlur={handleBlur}
          value={Utils.getValue(item, "Days")}
          error={Utils.getValue(errors, "Days")}
          helperText={Utils.getValue(errors, "Days")}
          label="TRIAL_ADD_INPUT_LABEL_DAYS"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Input
          {...props}
          required
          name="Left"
          onChange={handleChange}
          onBlur={handleBlur}
          value={Utils.getValue(item, "Left")}
          error={Utils.getValue(errors, "Left")}
          helperText={Utils.getValue(errors, "Left")}
          label="TRIAL_ADD_INPUT_LABEL_LEFT"
        />
      </Grid>
    </Grid>
  );
};

export default FormGroup;
