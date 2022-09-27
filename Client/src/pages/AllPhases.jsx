import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllPhasesAction } from '../store/actions';
import Phase from '../components/Phases/index';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function AllPhases() {
  const AllPhases = useSelector((state) => state.AllPhases);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPhasesAction());
  }, []);
  return (
    <div>
      <section className="feature-categories bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>All Phases</h2>
            <p>Properties in all phases</p>
          </div>
          <div className="row">
            {AllPhases?.data?.map((item, key) => {
              return <Phase item={item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
