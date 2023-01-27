import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ClickOutside } from "./clickOutSide";
import Button from "./Button";
import CircleDots from "../assets/svg/CircleDots";


type TBtn = "icon" | "button";

type TItems = {
  id: number;
  name: string;
  path?: string;
  onclick: () => void;
  icon?: ReactNode
};
interface Props {
  type?: TBtn;
  items?: TItems[];
  className?: string;
  buttonName?: string;
  children?: ReactNode;
  iconJsx?: JSX.Element;
}
const Menu = ({
  items,
  iconJsx,
  children,
  className,
  buttonName,
  type = "icon",
}: Props): JSX.Element => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      <ClickOutside onclickoutside={() => setMenuShow(false)}>
        <div className="relative">
          {type === "icon" && (
            <>
              {iconJsx ? (
                <div onClick={() => setMenuShow(!menuShow)}>{iconJsx}</div>
              ) : (
                <CircleDots
                  type="button"
                  className="mr-3 rotate-90 cursor-pointer"
                  onClick={() => setMenuShow(!menuShow)}
                />
              )}
              <>
                {items && menuShow && (
                  <div
                    className={`absolute bg-white shadow-2xl rounded-lg -ml-[6rem] bottom-0 z-10 py-1 ${className}`}
                    onClick={() => setMenuShow(!menuShow)}
                  >
                    <div className="flex flex-col">
                      {items.map((item, index) => (
                        <div key={index}>
                          <div
                            className={`
                            font-normal
                            text-base
                            py-2
                            my-2
                            mx-2
                            cursor-pointer
                            hover:bg-[#F0FAFE]
                            px-5
                            `}
                            {...(item.onclick && { onClick: item.onclick })}
                          >
                            {item.path && (
                              <Link to={item.path}>{item.name}</Link>
                            )}

                            {item.onclick &&
                              <div className="flex items-center gap-2">
                                {item.icon}
                                <span className="ml-3">{item.name}</span>
                            </div>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            </>
          )}

          {type === "button" && (
            <>
              <Button type="button" onClick={() => setMenuShow(!menuShow)}>
                {buttonName}
              </Button>
              {menuShow && (
                <div
                  className={`absolute bg-white shadow-2xl rounded-lg -ml-20 z-10 py-1 ${className}`}
                >
                  <div className="flex flex-col p-5">
                    <div className="" onClick={() => setMenuShow(false)} >
                    {children}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </ClickOutside>
    </>
  );
};

export default Menu;

