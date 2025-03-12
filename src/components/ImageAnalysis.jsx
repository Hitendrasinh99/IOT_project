import { useState } from "react";
import axios from "axios";
import { Container, Button, Alert } from "react-bootstrap";

function ImageAnalysis({ uploadedImages, setResults }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);

    try {
      const results = await Promise.all(
        uploadedImages.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image);

          const response = await axios.post(`${process.env.REACT_APP_API_URL}/analyze/`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          return {
            src: URL.createObjectURL(image),
            wildfire: response.data.prediction === "Wildfire",
            confidence: response.data.confidence,
          };
        })
      );

      setResults(results);
    } catch (error) {
      setError("Error analyzing images. Please try again.");
      console.error("Analysis error:", error);
    }

    setLoading(false);
  };

  return (
    <Container className="text-center">
      <h2>Image Analysis</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button className="mt-4" variant="success" onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Images"}
      </Button>
    </Container>
  );
}

export default ImageAnalysis;
