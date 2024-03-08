import React from 'react';
import GenericLabel from './GenericLabel';

const FormContent = ({ item }) => {
  const { labelTitle, id, type, placeholder, value, name } = item;
  const isRadioType = type === 'radio';

  const GenLabel = (

    <GenericLabel
      labelType={type}
      labelId={id}
      labelPlaceholder={placeholder}
      labelName={name}
      labelValue={value}
      labelTitle={labelTitle}
      isRadio={isRadioType}
    />

  );

  return (
    <>
      {isRadioType ? (
        {GenLabel}
      ) : (
        <div className="form-group">
          {GenLabel}
        </div>
      )}
    </>
  );
};

export default FormContent;
