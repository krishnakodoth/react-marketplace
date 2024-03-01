//@ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import { Col, Empty, Row, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
// import { Offer } from '@spanic/react-interview-components';
import {
  loadOffers,
  loadOfferData,
  changeSelection,
  changeSelectedQty,
} from '../../../store/offers-slice';
import { fetchOffers } from '../../../thunks/offers.thunks';
import styled from 'styled-components';
import { Offer } from './Offer';

export default function OffersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  // @ts-ignore
  const { offers, loading,itemSelections } = useSelector((state) => state.offers);

  const OfferWrapper = (props) => {
    const { id, title, description, price } = props;
    // const [selectedQty, setSelectedQty] = useState(0);
    const handleItemChange = (qty) => {
      dispatch(changeSelectedQty({id,selected:price}));      
    };

    
    return (
      <Col
      key={id}
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        lg={{ span: 6 }}
      >
        <Offer
        data={{ id, title, description, price }}
        selectedQty={ itemSelections.some(row=> row.id === id) ? 1 : 0}
        onChangeQty={handleItemChange}
        />
      </Col>
    );
  };

  if (loading) {
    return (
      <SpinContainer>
        <Spin />
      </SpinContainer>
    );
  }



  return offers.length ? (
    <Row gutter={[16, 16]}>
      {offers.map(OfferWrapper)}
      {/* {offers.map((offer,index) => {
        console.log(offer.id)
        return <p key={`${index}-${offer.id}`}></p>
      })} */}
    </Row>
  ) : (
    <Empty />
  );
}

const SpinContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
