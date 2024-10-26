import React, { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/index';
import WrapperModal from './components/WrapperModal/WrapperModal';
import { setModals } from 'store/ModalsSlice/ModalsSlice';
import ModalsCreateVacation from '../ModalsCreateVacation/ModalsCreateVacation';

const Modals: FC = memo(() => {
  const dispatch = useDispatch();

  const { modals } = useSelector((state: RootState) => state.modals);

  const handleCreateApplication = useCallback(() => {
    dispatch(setModals({ key: 'createApplication', value: false }));
  }, [dispatch, setModals]);

  return (
    <div>
      {modals.createApplication && (
        <WrapperModal onClose={handleCreateApplication}>
          <ModalsCreateVacation />
        </WrapperModal>
      )}
    </div>
  );
});

export default Modals;
