export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Routes = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => <div>{element}</div>;
export const useNavigate = () => jest.fn();
export const useLocation = () => ({ pathname: "/" });
export const Link = ({ children }) => <a href="#">{children}</a>;
