import { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

export const HubSpotForm = () => {
  useEffect(() => {
    // Create the form once the component mounts
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: "20470162",
        formId: "3a9fca1a-c32a-4439-bf97-2d3a438f06fd",
        target: "#hubspot-form-container"
      });
    }
  }, []);

  return <div id="hubspot-form-container" className="mt-8" />;
};