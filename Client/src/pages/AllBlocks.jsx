import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocietiesAction } from '../store/actions';
import Society from '../components/AllSocieties/Index';

export default function AllBlocks() {
  const allSocieties = useSelector((state) => state.AllSocieties);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSocietiesAction());
  }, []);
  return (
    <>
      <section className="feature-categories bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>All </span>Blocks
            </h2>
            <p>Properties In All Blocks.</p>
          </div>
          <div className="row">
            {allSocieties?.data?.map((item, key) => (
              <Society item={item}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
