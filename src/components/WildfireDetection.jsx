import { Container, Row, Col, Image } from "react-bootstrap";

function WildfireDetection({ results = [] }) {
  if (!results || !Array.isArray(results)) {
    return <h3>No images analyzed yet.</h3>;
  }

  return (
    <Container className="text-center">
      <h2>Wildfire Detection Results</h2>
      <Row>
        {results.length === 0 ? (
          <h4>No images available.</h4>
        ) : (
          results.map((img, index) => (
            <Col key={index} xs={6}>
              <h4>{img.wildfire ? "🔥 Wildfire" : "✅ No Wildfire"}</h4>
              <p>Confidence: {Math.round(img.confidence * 100)}%</p>
              <Image src={img.src} className="w-75" rounded />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default WildfireDetection;
