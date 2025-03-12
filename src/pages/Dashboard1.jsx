import { useState } from "react";
import LiveSatellite from "../components/LiveSatellite";
import ImageAnalysis from "../components/ImageAnalysis";
import WildfireDetection from "../components/WildfireDetection";
import { Container, Button, ButtonGroup } from "react-bootstrap";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("satellite");

  return (
    <Container className="mt-4 text-center">
      <h1 className="mb-4">IoT Dashboard</h1>
      <ButtonGroup>
        <Button variant="primary" onClick={() => setActiveTab("satellite")}>
          Live Satellite Images
        </Button>
        <Button variant="success" onClick={() => setActiveTab("analysis")}>
          Image Analysis
        </Button>
        <Button variant="danger" onClick={() => setActiveTab("wildfire")}>
          Wildfire Detection
        </Button>
      </ButtonGroup>

      <div className="mt-4">
        {activeTab === "satellite" && <LiveSatellite />}
        {activeTab === "analysis" && <ImageAnalysis />}
        {activeTab === "wildfire" && <WildfireDetection />}
      </div>
    </Container>
  );
}

export default Dashboard;
