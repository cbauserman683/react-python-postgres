import React from "react";
import DaisyUIComponent from "../components/demo/DaisyUIComponent";

const Demo = () => {
  return (
    <div>
      <h1 class="text-center text-blue-500">Tutorial </h1>
      <button class="btn">Button</button>
      <button class="btn btn-neutral">Neutral</button>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-ghost">Ghost</button>
      <button class="btn btn-link">Link</button>
      <DaisyUIComponent />
    </div>
  );
};

export default Demo;
