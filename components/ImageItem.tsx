import Image from "next/image";

const ImageItem = ({ article }) => {
  return (
    <Image
      src={article.imageUrl}
      alt={article.modelName}
      width="800px"
      height="600px"
    />
  );
};

export default ImageItem;
