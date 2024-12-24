import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TictactoeGame from "./TictactoeGame";
import App from "./App";
import Profile from "./Profile";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TictactoeGame />
    <br />
    <br />
    <App />
    <br />
    <br />
    <Profile
      name="Teddy"
      imageUrl="https://i.imgur.com/kOm5JP3.gif"
      imageSize={200}
    />
  </StrictMode>
);
