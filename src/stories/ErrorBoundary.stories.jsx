import ErrorBoundary from "../generic/ErrorBoundary";

export default {
  title: "Generic/ErrorBoundary",
  component: ErrorBoundary,
};

const ChildrenWithoutError = () => <h1>Without error</h1>;
export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <ChildrenWithoutError />
  </ErrorBoundary>
);

const prop = undefined;
const ChildrenWithError = () => <h1>Without error {prop.message}</h1>;
export const ErrorBoundaryWithError = () => (
  <ErrorBoundary>
    <ChildrenWithError />
  </ErrorBoundary>
);
