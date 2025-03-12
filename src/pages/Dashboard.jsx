import { useState } from "react";
import LiveSatellite from "./LiveSatellite";
import WildfireDetection from "./WildfireDetection";
import { Container } from "react-bootstrap";

function Dashboard() {
  const [results, setResults] = useState([]);

  return (
    <Container className="mt-4 text-center">
      <h1 className="mb-4">IoT Dashboard</h1>
      <LiveSatellite setResults={setResults} />
      <WildfireDetection results={results} />
    </Container>
  );
}

export default Dashboard;
