import { useEffect } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

type AlertType = {
  show: boolean;
  msg: string;
  showAlert: () => void;
};

const AlertAI1 = ({ show, msg, showAlert }: AlertType) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);
  return (
    <>
      {show && (
        <div className='absolute w-full -top-12 '>
          <div className='flex items-center justify-center w-8/12 mx-auto text-red-400 bg-red-200 rounded py-1 px-2 text-center'>
            <FiAlertTriangle />
            <p className='ml-4 2xl:text-2xl'>{msg}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertAI1;
