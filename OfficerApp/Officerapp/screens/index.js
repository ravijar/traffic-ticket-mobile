// Import and export various components from different files
import Login from "./Login";
import Welcome from "./Welcome";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import DashBoard from "./DashBoard";
import AddNewFine from "./AddNewFine";
import VehicleDetails from "./VehicleDetails";
import DriverFineHistory from "./DriverFIneHistory";
import Message from "./Message";
import OTPscreen from "./OTPscreen";

// Export all the imported components for use in other parts of the application

export {
  Login,
  Welcome,
  ForgotPassword,
  ChangePassword,
  DashBoard,
  AddNewFine,
  VehicleDetails,
  DriverFineHistory,
  Message,
  OTPscreen,
};

//The index.js file serves as a central export file in a directory,
//simplifying imports, encapsulating internal structure,
//and promoting export consistency while abstracting implementation details.
// It helps avoid circular dependencies between modules.
