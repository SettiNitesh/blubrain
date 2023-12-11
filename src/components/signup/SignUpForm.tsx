import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

import { LoadingButton } from '@mui/lab';
import { IFields } from '../../interfaces';
import { BluBrainTextField } from '../shared';
import { ISignUpFieldsData } from './SignUpFields';

interface ISignUpFormProps {
  isLoading: boolean;
  isButtonEnabled: boolean;
  formFields: ISignUpFieldsData;
  signUpHandler: () => void;
  handleChange: (name: string, value: string | boolean) => void;
}

const SignUpForm = ({ isLoading, isButtonEnabled, formFields, signUpHandler, handleChange }: ISignUpFormProps) => {
  return (
    <div className="grid w-full">
      {Object.values(formFields).map((field: IFields, index: number) => {
        return (
          <div className="mt-5" key={`${field.key}-${index}`}>
            {field.type === 'text' || field.type === 'password' ? (
              <BluBrainTextField
                key={`${field.key}-${index}`}
                type={field.type}
                label={field.label}
                variant={'outlined'}
                value={field.value as string}
                isError={field.isError}
                required={field.isRequired}
                errorMessage={field.errorMessage}
                placeHolder={field.placeHolder ?? ''}
                styles={{
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'red',
                  },
                }}
                onChange={(e) => handleChange(field.key, e.target.value)}
              />
            ) : (
              <FormGroup>
                <FormControlLabel
                  key={`${field.key}-${index}`}
                  control={
                    <Checkbox
                      checked={field.value as boolean}
                      required
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(field.key, event.target.checked)
                      }
                      inputProps={{ 'aria-label': 'controlled' }}
                      color="success"
                    />
                  }
                  label={<span className="text-sm">{field.label}</span>}
                />
              </FormGroup>
            )}
          </div>
        );
      })}
      <div className="grid mt-4">
        <LoadingButton
          size="large"
          onClick={signUpHandler}
          loading={isLoading}
          variant="contained"
          color="success"
          disabled={isButtonEnabled}
        >
          SignUp
        </LoadingButton>
      </div>
    </div>
  );
};

export default SignUpForm;
