import Error from "../../error";
import { ErrorBoundary } from "../../error-boundary";
import ProductDetail from "./product-detail";
import Reccomendation from "./reccomendation-section";
import Review from "./review-section";

export default function ProductPage() {
  return (
    <div>
      <ErrorBoundary fallback={Error}>
        <ProductDetail />
      </ErrorBoundary>

      <ErrorBoundary fallback={Error}>
        <Reccomendation />
      </ErrorBoundary>

      <ErrorBoundary fallback={Error}>
        <Review />
      </ErrorBoundary>
    </div>
  );
}
