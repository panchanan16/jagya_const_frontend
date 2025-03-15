import toast from "react-hot-toast";

export const successHandler = (response, options = { notifyOnSuccess: false, notifyOnFailed: true }) => {
  const { data } = response;
  if (data && data.status === true) {
    console.log(response)
    const message = response.data && data.msg;
    const successText = message || 'Successfully Executed!'

    if (options.notifyOnSuccess) {
      toast.success(successText, {
        iconTheme: {
          primary: '#000',
          secondary: 'white',
        }
      });
    }
  } else {
    const message = response.data && data.message;
    const errorText = message || "Something Went Wrong!";
    if (options.notifyOnFailed) {
      toast.error(errorText);
    }
  }
};