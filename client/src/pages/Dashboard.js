import React, { useEffect } from 'react';
// import { useEffect } from "react";
// import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
// import { SET_USER } from "../reducers/mapReducer";
import Modal from 'react-modal';
import 'nes.css/css/nes.min.css';
import '../components/styles/animations.css';
import Players from '../components/players';
import Map from '../components/map/Map';
import ModalInput from '../components/modal/ModalInput';
import MainModal from '../components/modal/MainModal';
import useMapGuide from './../hooks/useMapGuide';
import Chat from '../components/chat/chat';

const Dashboard = () => {
  const { playerNearGuide } = useMapGuide();
  const modalCanOpen = useSelector((state) => state.mapRoute.modalCanOpen);
  const mapGuideState = useSelector((state) => state.mapGuide);

  return (
    <div className="dashboard-layout">
      {modalCanOpen && playerNearGuide && <MainModal isOpen={true} />}
      <ModalInput isOpen={true} />
      <Map x={0} />
      <Players />
      <Chat />
    </div>
  );
};

export default Dashboard;
