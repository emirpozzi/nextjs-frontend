import Image from "next/dist/client/image";
import articleStyles from "../styles/Article.module.css";

const SlideshowButton = ({ onClick, orientation }) => {
  return (
    <Image
      className={orientation === "left" && articleStyles.icon}
      src="/chevron-circled.svg"
      onClick={() => onClick()}
      alt="arrowIcon"
      width="40px"
      height="40px"
    ></Image>
  );
};

export default SlideshowButton;
