import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const GridComponent = (props) => {
  const [localData, setLocalData] = useState(props.data);

  useEffect(() => {
    // Modify the local data as needed
    const modifiedData = localData.map((item) => {
      // Your modification logic goes here
      return item;
    });
    setLocalData(modifiedData);
  }, [props.data]);

  return (
    <div style={{ display: "flex", marginTop: "3%" }}>
      {localData.map((item, index) => (
        <Card
          style={{ width: "18rem", height: "25rem", marginLeft: "5%" }}
          className="shadow mb-5 bg-white rounded"
        >
          <Card.Header
            as="h5"
            style={{ backgroundColor: "mediumslateblue", color: "white" }}
          >
            {item.title}
          </Card.Header>
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Subtitle className="mb-2 text-muted">
              {item.year}
            </Card.Subtitle>
            <Card.Text>{item.authors}</Card.Text>
            <Card.Text>{item.conference}</Card.Text>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <Card.Link href="#" style={{ textAlign: "center" }}>
                View PDF
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default GridComponent;
