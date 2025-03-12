import { useState } from "react";
import { Container, Form, Row, Col, Image } from "react-bootstrap";
import ImageAnalysis from "./ImageAnalysis";

function LiveSatellite({ setResults }) {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages(urls);
  };

  return (
    <Container className="text-center">
      <h2>Upload Satellite Images</h2>
      <Form.Control type="file" multiple accept="image/*" onChange={handleImageUpload} />
      <Row className="mt-4">
        {images.map((img, index) => (
          <Col key={index} xs={4}>
            <Image src={img} alt={`satellite-${index}`} fluid rounded />
          </Col>
        ))}
      </Row>
      <ImageAnalysis uploadedImages={images} setResults={setResults} />
    </Container>
  );
}

export default LiveSatellite;
