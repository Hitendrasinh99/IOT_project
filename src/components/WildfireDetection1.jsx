import { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

function WildfireDetection() {
  const [wildfireImages, setWildfireImages] = useState([]);  // Holds wildfire images
  const [noWildfireImages, setNoWildfireImages] = useState([]);  // Holds no wildfire images
  const [loading, setLoading] = useState(false); // Loading state

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    setLoading(true);

    // Load the TensorFlow.js model
    const model = await tf.loadLayersModel("https://your-model-url/model.json");

    for (const file of files) {
      const imageURL = URL.createObjectURL(file);
      const imageName = file.name;

      // Create an Image object
      const img = new Image();
      img.src = imageURL;
      img.width = 32;
      img.height = 32;

      img.onload = async () => {
        // Preprocess the image for the model
        const tensor = tf.browser
          .fromPixels(img)
          .resizeBilinear([32, 32])
          .expandDims(0)
          .toFloat()
          .div(255);

        // Predict the image category
        const result = model.predict(tensor);
        const prediction = (await result.data())[0];

        if (prediction > 0.5) {
          setWildfireImages((prev) => [...prev, { name: imageName, src: imageURL }]);
        } else {
          setNoWildfireImages((prev) => [...prev, { name: imageName, src: imageURL }]);
        }
      };
    }
    setLoading(false);
  };

  return (
    <Container className="text-center">
      <h2>Wildfire Detection</h2>
      <p>Upload images to classify wildfire (🔥) and no-wildfire (✅) areas.</p>

      <Form.Group className="mb-3">
        <Form.Control type="file" multiple accept="image/*" onChange={handleImageUpload} />
      </Form.Group>

      {loading && <p>Analyzing images...</p>}

      <Row className="mt-4">
        {/* Left Column - Wildfire Images */}
        <Col xs={6}>
          <h3 className="text-danger">🔥 Wildfire</h3>
          {wildfireImages.length === 0 ? <p>No wildfire images detected</p> : null}
          {wildfireImages.map((img, index) => (
            <div key={index} className="mb-3">
              <Image src={img.src} className="w-75" rounded />
              <p>{img.name}</p>
            </div>
          ))}
        </Col>

        {/* Right Column - No Wildfire Images */}
        <Col xs={6}>
          <h3 className="text-success">✅ No Wildfire</h3>
          {noWildfireImages.length === 0 ? <p>No non-wildfire images detected</p> : null}
          {noWildfireImages.map((img, index) => (
            <div key={index} className="mb-3">
              <Image src={img.src} className="w-75" rounded />
              <p>{img.name}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default WildfireDetection;
