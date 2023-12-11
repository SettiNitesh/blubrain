import { ChangeEventHandler } from 'react';

import { SxProps, TextField, TextFieldVariants, Theme } from '@mui/material';

interface ITextFieldProps {
  type: string;
  label: string;
  required: boolean;
  isError?: boolean;
  placeHolder: string;
  errorMessage?: string;
  variant: TextFieldVariants;
  styles?: SxProps<Theme> | undefined;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const BluBrainTextField = ({
  variant,
  label,
  required = false,
  isError = false,
  styles,
  type,
  value,
  placeHolder,
  errorMessage,
  onChange,
}: ITextFieldProps) => {
  return (
    <TextField
      error={isError}
      fullWidth
      type={type}
      value={value}
      placeholder={placeHolder}
      helperText={isError && errorMessage}
      variant={variant}
      required={required}
      label={label}
      onChange={onChange}
      color="success"
      sx={styles}
    />
  );
};

export default BluBrainTextField;
