import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller control={control} defaultValue="" name={name} render={({ field }) => <TextField fullWidth label={label} required />} />
    </>
  );
};

export default FormInput;