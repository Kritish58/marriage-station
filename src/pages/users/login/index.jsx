import { ArrowLeftIcon } from '@heroicons/react/outline';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../../api';
import { Error, Input, Label, Spinner, Submit, Toggle } from '../../../components';
import { CountryCode } from '../../../components/Form/MobileNumber';
import Constants from '../../../constants';
import { authFailure, authPending, authSuccess, setMobileNumber } from '../../../redux/reducers';
import { toaster } from '../../../utils';
import { logInWithEmailSchema, logInWithMobileSchema } from '../../../validations/yupSchemas';
import './index.scss';

export const LogInPage = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { isLoading } = useSelector((state) => state.authState);
   const [useEmail, setUseEmail] = useState(false);
   const [countryCode, setCountryCode] = useState('+977');

   const logInValues = useMemo(
      () => ({
         email: '',
         mobileNumber: '',
         password: '',
      }),
      []
   );

   // HANDLE LOG IN SUBMIT
   const onLogIn = async (values) => {
      if (useEmail) {
         dispatch(authPending());
         let data = { email: values.email, password: values.password };
         try {
            let res = await API.post(Constants.apiEndpoint.auth.login, data);
            dispatch(authSuccess(res));
            navigate('/home', { replace: true });
         } catch (error) {
            toaster('error', error);
            dispatch(authFailure());
         }
      } else {
         dispatch(setMobileNumber(`${countryCode}${values.mobileNumber}`));
         navigate('/verifyOTP', { replace: true });
      }
   };

   // USE FORMIK
   const logInForm = useFormik({
      initialValues: logInValues,
      validationSchema: useEmail ? logInWithEmailSchema : logInWithMobileSchema,
      onSubmit: () => onLogIn(logInForm.values),
   });
   return (
      <div className="main d-grid place-items-center">
         <form onSubmit={logInForm.handleSubmit} className="loginform m-auto">
            <h1 className="my-4">Log In</h1>
            <Toggle
               left="Email address"
               right="Mobile number"
               value={useEmail}
               onClick={() => setUseEmail(!useEmail)}
            />
            {useEmail ? (
               <>
                  <Input
                     type="text"
                     name="email"
                     label="Email"
                     placeholder="Enter your email"
                     values={logInForm.values.email}
                     onChange={(value) => logInForm.setFieldValue('email', value)}
                     error={logInForm.touched.email && logInForm.errors.email}
                  />
                  <Input
                     className="mt-4"
                     type="password"
                     name="password"
                     label="Password"
                     placeholder="Enter your password"
                     values={logInForm.values.password}
                     onChange={(value) => logInForm.setFieldValue('password', value)}
                     error={logInForm.touched.password && logInForm.errors.password}
                  />
               </>
            ) : (
               <div className="container-fluid p-0">
                  <Label name="mobileNumber" label="Mobile number" className="mt-4" />
                  <div className="d-flex align-items-center justify-content-between">
                     <CountryCode
                        value={countryCode}
                        options={Constants.countryCode}
                        onChange={(value) => setCountryCode(value)}
                     />

                     <Input
                        type="text"
                        name="mobileNumber"
                        className="flex-grow-1"
                        placeholder="Enter your number"
                        values={logInForm.values.mobileNumber}
                        onChange={(value) => logInForm.setFieldValue('mobileNumber', value)}
                     />
                  </div>
                  {logInForm.touched && logInForm.errors.mobileNumber && <Error>{logInForm.errors.mobileNumber}</Error>}
               </div>
            )}

            {isLoading ? (
               <Spinner />
            ) : (
               <>
                  <div className="d-grid place-items-center mt-4 mb-2">
                     <Submit text="Log in" />
                  </div>
                  {useEmail && (
                     <span
                        className="text-primary d-flex justify-content-center"
                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={() => navigate('/forgot')}>
                        Forgot password?
                     </span>
                  )}
               </>
            )}
            <div
               className="d-flex justify-content-center align-items-center pointer mt-4 primary__color"
               onClick={() => navigate(-1)}>
               <ArrowLeftIcon width={20} className="mx-1" /> Go back
               <span></span>
            </div>
         </form>
      </div>
   );
};
