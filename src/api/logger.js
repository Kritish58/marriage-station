import Constants from "../constants";

export const printRequest = (request) => {
  if (!Constants.isDevelopment) {
    return;
  }

  // @ts-ignore
  if (Promise.resolve(request) === request) {
    request.then((r) => {
      printRequest(r);
    });
  } else {
    console.log("---------------- START:  Network Request ------------------");
    console.log("Method:", request.method);
    console.log("Url:", request.baseURL + "" + request.url);
    //console.log('Headers:', req.headers);

    console.log("Body", { data: request.data, params: request.params });
  }
};

export const printResponse = (response) => {
  if (!Constants.isDevelopment) {
    return;
  }

  // @ts-ignore
  if (Promise.resolve(response) === response) {
    response.then((r) => {
      printRequest(r);
    });
  } else {
    console.log(
      "---------------- START: Network Response (Success) ------------------"
    );
    console.log("Url:", response.request.baseURL + "" + response.request.url);
    console.log("Status Code:", response.status);
    //console.log('Headers:', res.headers);
    console.log("Response:", response.data);
    console.log("---------------- END: Network Response ------------------");
  }
};

export const printResponseError = (error) => {
  if (!Constants.isDevelopment) {
    return;
  }

  console.log(
    "---------------- START: Network Response (Error) ------------------"
  );
  console.log("Name", error.name);
  console.log("Message", error.message);
  console.log("Status Code:", error.response && error.response.status);
  //console.log('Headers', error.response && error.response.headers);
  console.log("Response", error.response && error.response.data);

  console.log("---------------- END: Network Response ------------------");
};
