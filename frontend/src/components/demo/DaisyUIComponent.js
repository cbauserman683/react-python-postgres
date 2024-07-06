import React from "react";

const DaisyUIComponent = () => {
  return (
    <div data-theme="darktheme" class="p-8">
      <h2 class="text-primary text-2xl font-bold">Primary Heading</h2>
      <p class="text-secondary">This is a paragraph with secondary color.</p>
      <button class="btn btn-accent">Accent Button</button>
      <div class="alert alert-info">Info Alert</div>
      <div class="alert alert-success">Success Alert</div>
      <div class="alert alert-warning">Warning Alert</div>
      <div class="alert alert-error">Error Alert</div>
      <h2 style={{ color: "green" }} class="text-2xl font-bold">
        Green Heading
      </h2>
    </div>
  );
};

export default DaisyUIComponent;
