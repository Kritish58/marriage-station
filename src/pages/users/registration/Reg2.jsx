import { useFormik } from 'formik';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Select, Submit } from '../../../components';
import Constants from '../../../constants';
import { setProfile } from '../../../redux/reducers';
import { part2Schema } from '../../../validations/yupSchemas';
import './styles/RegCont.scss';

export const Reg2 = () => {
   const { profile } = useSelector((state) => state.profile);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   // FORM INITIAL VALUES
   const initialValues = useMemo(
      () => ({
         age: '',
         religion: '',
         motherTongue: '',
         email: '',
         password: '',
         confirmPassword: '',
      }),
      []
   );

   // HANDLE FORM SUBMIT
   const handleSubmit = ({ confirmPassword, ...rest }) => {
      dispatch(setProfile({ ...profile, ...rest }));
      navigate('/registration/40');
   };

   // USE FORMIK
   const formik = useFormik({
      initialValues: initialValues,
      validationSchema: part2Schema,
      onSubmit: () => handleSubmit(formik.values),
   });

   // GENERATE OPTIONS FOR RELIGION SELECTION
   const religionOptions = Constants.religions.map((r) => {
      return { label: r, value: r };
   });

   // GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
   const motherTongueOptions = Constants.motherTongues.map((mt) => {
      return { label: mt, value: mt };
   });

   return (
      <div className="main reg2 p-4">
         <div className="d-flex flex-row-reverse flex__box">
            <form onSubmit={formik.handleSubmit} className="m-4 px-4 container-lg rounded-3 flex__form">
               {/* AGE INPUT */}
               <Input
                  type="text"
                  name="age"
                  label="Age"
                  placeholder="Enter age"
                  max={2}
                  value={formik.values.age}
                  onChange={(value) => formik.setFieldValue('age', value)}
                  error={formik.touched.age && formik.errors.age}
               />

               {/* RELIGION SELECTOR */}
               {/* <InputLabel name="religion" label="Religion" className="float" /> */}
               <Select
                  padding={1}
                  name="religion"
                  label="Religion"
                  options={religionOptions}
                  value={formik.values.religion}
                  onChange={(value) => formik.setFieldValue('religion', value)}
                  error={formik.touched.religion && formik.errors.religion}
               />

               {/* MOTHER TONGUE SELECTOR */}
               <Select
                  padding={1}
                  name="motherTongue"
                  label="Mother Tongue"
                  options={motherTongueOptions}
                  value={formik.values.motherTongue}
                  onChange={(value) => formik.setFieldValue('motherTongue', value)}
                  error={formik.touched.motherTongue && formik.errors.motherTongue}
               />

               {/* EMAIL FIELD */}
               <Input
                  type="email"
                  name="email"
                  label="Email address"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={(value) => formik.setFieldValue('email', value)}
                  error={formik.touched.email && formik.errors.email}
               />

               {/* PASSWORD FIELD */}
               <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Enter password"
                  value={formik.values.password}
                  onChange={(value) => formik.setFieldValue('password', value)}
                  error={formik.touched.password && formik.errors.password}
               />

               {/* CONFIRM PASSWORD FIELD */}
               <Input
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Re-enter password"
                  value={formik.values.confirmPassword}
                  onChange={(value) => formik.setFieldValue('confirmPassword', value)}
                  error={formik.touched.confirmPassword && formik.errors.confirmPassword}
               />

               <div className="d-flex justify-content-center mt-4">
                  <Submit text="Continue" />
               </div>
            </form>
            <div className="adbox flex-grow-1 bg-success">ADVERTISEMENT</div>
         </div>
      </div>
   );
};
