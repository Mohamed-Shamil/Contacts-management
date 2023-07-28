
  import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

  const toastifyNotifications = () => {

const inValidToast = () => {
    toast.error('Unsuccessfull!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

const successToast = () => {
    toast.success('Successfull', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
 
    return {
        inValidToast, successToast
    }
  }

  export default toastifyNotifications