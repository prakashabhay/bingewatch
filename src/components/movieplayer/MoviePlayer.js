import React from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from 'react-player/youtube';

const youtubeUrl = "https://www.youtube.com/watch?v=";

export function MoviePlayer(props) {
  const {video,openVideoPlayer} = props;

  const MoviePalyerModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#000000" }}>
          <ReactPlayer
            className="container-fluid"
            url={video ?(youtubeUrl + video.key):''}
            playing
            width="100%"
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div className="container">
        <MoviePalyerModal
          show={props.isOpen}
          onHide={() => {
            openVideoPlayer(false);
          }}
        ></MoviePalyerModal>
    </div>
  );
}
