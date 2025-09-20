import AppFrame from "../components/AppFrame";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/AppFrame",
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae id
      repudiandae voluptatem vitae corporis eos quibusdam aliquid culpa fugit
      veniam animi excepturi eveniet dolor ipsa adipisci libero, corrupti velit
      ipsum.
    </AppFrame>
  </Router>
);
