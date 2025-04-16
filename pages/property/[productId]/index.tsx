import { useRouter } from "next/router";

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>Detail LIST {productId}</div>;
};

export default PropertyDetail;