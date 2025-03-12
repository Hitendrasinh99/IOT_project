import { useState } from "react";
import { Container, Button } from "react-bootstrap";

function ImageAnalysis() {
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = () => {
    setAnalyzed(true);
    alert("Images analyzed using CNN (Placeholder for TensorFlow.js integration).");
  };

  return (
    <Container className="text-center">
      <h2>Image Analysis</h2>
      <Button className="mt-4" variant="success" onClick={handleAnalyze}>
        Analyze Images
      </Button>
      {analyzed && <p className="mt-4 text-success">Analysis complete! Results available soon.</p>}
    </Container>
  );
}

export default ImageAnalysis;
