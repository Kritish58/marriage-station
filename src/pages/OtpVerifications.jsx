// import { useState } from "react";
// import { toast } from "react-toastify";
// import { Input, Submit } from "../components";

// // import { AiOutlineArrowLeft, AiOutlineMail } from "react-icons/ai";

// // import Constants from "../../../common/constants";
// // import httpClient from "../../../common/api/http-client";

// // import OtpVerificationSummary from "./OtpVerificationSummary";

// function OtpVerification({ customerId }) {
//   const [getOtp, setGetOtp] = useState(new Array(6).fill(""));

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false;

//     setGetOtp([...getOtp.map((d, i) => (i === index ? element.value : d))]);

//     if (element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };
//   const [showOTPSummary, setShowOTPSummary] = useState(false);

//   const getSuccessfullyVerified = async () => {
//     try {
//       //   const res = await httpClient.put(
//       //     `${Constants.apiEndpoint.auth.verifyOTP}/${customerId}`,
//       //     { otp: getOtp.join("") }
//       //   );
//       //   toast.success(res.message, {
//       //     position: toast.POSITION.TOP_CENTER,
//       //   });
//       setShowOTPSummary(true);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.error?.message ??
//           error.message ??
//           "Internal server error",
//         {
//           position: toast.POSITION.TOP_CENTER,
//         }
//       );
//     }
//   };

//   return (
//     <div className="w-100 h-100 align-items-center">
//       {showOTPSummary ? (
//         // <OtpVerificationSummary />
//         <h1>Verified</h1>
//       ) : (
//         <div className="container my-5 text-center">
//           <div className="my-4">
//             {/* <AiOutlineMail size={40} /> */}
//             <h6>Welcome to Marriage Station</h6>
//           </div>

//           <div className="my-5">
//             <p className="fs-3">
//               <b>OTP was sent to your mobile</b>
//             </p>
//           </div>
//           <div style={{ marginRight: "200px", marginBottom: "-10px" }}></div>
//           <div className="m-5 d-flex flex-row justify-content-center">
//             {getOtp.map((data, index) => {
//               return (
//                 <input
//                   className="otp-field form-control mx-2 bg-light"
//                   type="text"
//                   name="otp"
//                   style={{ height: "50px", width: "50px" }}
//                   maxLength="1"
//                   key={index}
//                   value={data}
//                   onChange={(e) => handleChange(e.target, index)}
//                   onFocus={(e) => e.target.select()}
//                 />
//               );
//             })}
//           </div>
//           <div className="">
//             {/* <button
//               onClick={getSuccessfullyVerified}
//               className="btn btn-success w-50"
//               style={{ height: "50px", width: "auto" }}
//             >
//               Submit
//             </button> */}
//             <div className="container-fluid">
//               <Submit
//                 text="Submit"
//                 className="w-100"
//                 onClick={getSuccessfullyVerified}
//               />
//             </div>
//           </div>
//           <div className="my-4">
//             <p className="text-muted">
//               Didn't receive the code ? <b className="text-dark">Resend</b>
//             </p>
//           </div>
//           <div className="mt-5">
//             <p>
//               <h6>Icon</h6>
//               {/* <AiOutlineArrowLeft size={20} /> Back to log in */}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default OtpVerification;
