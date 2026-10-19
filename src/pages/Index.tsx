import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Nomads Digital — Growth you can see, measure, and trust.";
  }, []);
  return (
    <iframe
      src="/affirm.html"
      title="Nomads Digital"
      style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", border: "none" }}
    />
  );
};

export default Index;
