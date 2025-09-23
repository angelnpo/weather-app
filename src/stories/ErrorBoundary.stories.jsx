import ErrorBoundary from "../generic/ErrorBoundary";

export default {
  title: "Generic/ErrorBoundary",
  component: ErrorBoundary,
};

export const ErrorBoundaryExample = () => (
  <ErrorBoundary message="Something went wrong" />
);
