/** @jsx jsx */
import styled from '@emotion/styled';
import { Grid, jsx, Spinner, useThemeUI } from 'theme-ui';
import { Field } from './Field';
import { navigate } from 'gatsby-link';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  message: '',
};

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_NUMBER_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const REQUIRED_FIELD_ERROR_MESSAGE = 'Ovo polje je obavezno.';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => {
        navigate(`/success`);
        reset(defaultValues);
      })
      .catch(() => alert('Došlo je do greške, molimo pokušajte ponovo.'));
  };

  return (
    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <Grid gap={[0, null, null, 6]} columns={[null, null, null, 2]}>
        <div>
          <FormGroup>
            <Field
              name="firstName"
              placeholder="Ime*"
              register={register}
              validation={{
                required: REQUIRED_FIELD_ERROR_MESSAGE,
              }}
              errors={errors.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="lastName"
              placeholder="Prezime*"
              register={register}
              validation={{
                required: REQUIRED_FIELD_ERROR_MESSAGE,
              }}
              errors={errors.lastName}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="email"
              placeholder="Email*"
              register={register}
              validation={{
                required: REQUIRED_FIELD_ERROR_MESSAGE,
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Uneta email adresa nije validna.',
                },
              }}
              errors={errors.email}
            />
          </FormGroup>
          <FormGroup>
            <Field
              name="phone"
              placeholder="Telefon*"
              register={register}
              validation={{
                required: REQUIRED_FIELD_ERROR_MESSAGE,
                pattern: {
                  value: PHONE_NUMBER_REGEX,
                  message: 'Uneti format telefona nije validan.',
                },
              }}
              errors={errors.phone}
            />
          </FormGroup>
          <FormGroup>
            <Field name="company" placeholder="Firma" register={register} />
          </FormGroup>
        </div>
        <FormGroup>
          <Textarea
            type="text"
            name="message"
            placeholder="Poruka*"
            {...register('message', { required: 'Ovo polje je obavezno.' })}
            sx={{
              color: 'text',
              fontFamily: 'body',
              borderColor: 'muted',
              fontSize: 2,
              padding: 4,
              height: ['300px', null, null, '100%'],
              borderRadius: 'default',
              '&:focus': {
                outline: 'none',
                borderColor: 'primary',
              },
            }}
          />
          <ErrorMessage>
            {errors.message && errors.message.message}
          </ErrorMessage>
        </FormGroup>
      </Grid>
      <div
        sx={{
          display: 'flex',
          justifyContent: ['center', null, null, 'flex-start'],
        }}
      >
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

const Textarea = styled.textarea`
  border-width: 1px;
  border-style: solid;
  width: 100%;
  resize: none;
`;

const StyledSubmitButton = styled.button`
  text-transform: capitalize;
  cursor: pointer;
  border: none;
`;

const FormGroup = ({ children }) => <div sx={{ mb: 6 }}>{children}</div>;

const SubmitButton = ({ isSubmitting }) => {
  const {
    theme: { buttons },
  } = useThemeUI();
  return (
    <StyledSubmitButton
      type="submit"
      name="submit"
      sx={{
        ...buttons.primary,
        fontSize: 2,
        fontFamily: 'body',
        width: ['100%', null, null, '220px'],
      }}
    >
      {isSubmitting ? (
        <Spinner
          title="Loading"
          size={24}
          strokeWidth={2}
          sx={{ color: 'primaryBackground' }}
        />
      ) : (
        <span>Pošalji</span>
      )}
    </StyledSubmitButton>
  );
};
