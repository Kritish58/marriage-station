import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import API from "../../../../api";
import { Input, Radio, Select } from "../../../../components";
import Constants from "../../../../constants";
import { generateOptions, toaster } from "../../../../utils";
import { basicSearchSchema } from "../../../../validations/yupSchemas";

export const BasicSearchForm = ({ initialValues, onSubmit }) => {
  //   const dispatch = useDispatch();
  // const navigate = useNavigate();

  // HANDLE FORM SUBMIT
  const handleSubmit = async (values) => {
    try {
      let res = await API.get(`${Constants.apiEndpoint.user.getAllUser}`, {
        // params: {
        //   ...values,
        // },
      });
    } catch (error) {
      toaster("error", error);
    }
  };

  // USE FORMIK
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: basicSearchSchema,
    onSubmit: () => onSubmit(formik.values),
  });

  // GENERATE OPTIONS FOR RELIGION SELECTION
  const religionOptions = generateOptions(Constants.religions);

  // GENERATE OPTIONS FOR MOTHER TONGUE SELECTION
  const motherTongueOptions = generateOptions(Constants.motherTongues);

  // GENERATE OPTIONS FOR CASTE SELECTION
  const casteOptions = generateOptions(Constants.caste);

  // GENERATE OPTIONS FOR STATE SELECTION
  const provincesOptions = generateOptions(Constants.provinces);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 search__form basic__search__form"
    ></form>
  );
};
