import Image from "next/image";

const ArrowIcon: React.FC = () => {
  return (
    <Image
      src="/chevron-small.svg"
      alt="arrowIcon"
      width="12px"
      height="12px"
    ></Image>
  );
};

export default ArrowIcon;
