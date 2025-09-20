"use client";

import React, { useState } from "react";
import ModalImage from "react-modal-image";
import { Row, Col } from 'react-bootstrap';

import "./image-modal-lightbox.scss";

export default function ImageModalLightbox({ objects }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Row className="justify-content-center image-modal-lightbox">
      {objects.map((object, index) => (
        <Col key={index} sm={3} className="mb-3">
          <ModalImage small={object.url} large={object.url} onClose={() => setModalOpen(false)} />
        </Col>
      ))}
    </Row>
  );
}
