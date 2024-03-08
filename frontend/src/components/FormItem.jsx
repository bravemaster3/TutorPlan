import React from 'react';
import GenericLabel from './GenericLabel';

const FormItem = ({ item }) => {
  const { labelTitle, id, type, placeholder, value, name } = item;
  const isRadioType = type === 'radio';

  const GenLabel = (

    <GenericLabel {...item} />

  );

  return (
    <>
      {isRadioType ? (
        <>
          {GenLabel}
        </>
      ) : (
        <div className="form-group">
          {GenLabel}
        </div>
      )}
    </>
  );
};

export default FormItem
