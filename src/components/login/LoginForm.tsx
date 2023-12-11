import { IFields } from '../../interfaces';
import { BluBrainTextField } from '../shared';
import { ILoginFieldsData } from './LoginFields';
import { LoadingButton } from '@mui/lab';

interface ILogInFormProps {
  isLoading: boolean;
  isButtonEnabled: boolean;
  formFields: ILoginFieldsData;
  signInHandler: () => void;
  handleChange: (name: string, value: string | boolean) => void;
}

const LogInForm = ({ isLoading, isButtonEnabled, formFields, signInHandler, handleChange }: ILogInFormProps) => {
  return (
    <div className="grid w-full">
      {Object.values(formFields).map((field: IFields, index: number) => {
        return (
          <div className="mt-5">
            {(field.type === 'text' || field.type === 'password') && (
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
            )}
          </div>
        );
      })}
      <div className="grid mt-7">
        <LoadingButton
          size="large"
          onClick={signInHandler}
          loading={isLoading}
          variant="contained"
          color="success"
          disabled={isButtonEnabled}
        >
          Sign In
        </LoadingButton>
      </div>
    </div>
  );
};

export default LogInForm;
