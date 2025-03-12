import { useState } from "react";
import { Container, Form, Row, Col, Image } from "react-bootstrap";

function LiveSatellite() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (images.length + files.length > 15) {
      alert("You can only upload up to 15 images.");
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  return (
    <Container className="text-center">
      <h2>Upload Satellite Images</h2>
      <Form.Control type="file" multiple accept="image/*" onChange={handleImageUpload} />
      
      <Row className="mt-4">
        {images.map((img, index) => (
          <Col key={index} xs={4}>
            <Image src={URL.createObjectURL(img)} alt={`satellite-${index}`} fluid rounded />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LiveSatellite;
