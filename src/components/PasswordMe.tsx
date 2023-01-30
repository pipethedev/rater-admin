// import { AIeyebol, AIeyeslashbol } from "arvara-icons";

import EyeClose from "../assets/svg/EyeClose";
import EyeOpen from "../assets/svg/EyeOpen";

interface Props {
  showPassword: boolean;
  setShowPassword: (password: boolean) => void;
}
const PasswordMe = (props: Props): JSX.Element => {
  const { showPassword, setShowPassword } = props;
  return (
    <div
      onClick={() => setShowPassword(!showPassword)}
      className="cursor-pointer"
    >
      {showPassword ? (
        <EyeClose className="icon solid text-blue-2" />
      ) : (
        <EyeOpen className="icon solid text-blue-2" />
      )}
    </div>
  );
};

export default PasswordMe;
