// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FrIconModel } from '../model/fr-icon-model.js';
import { rxSchemaToDefaultProps, rxSchemaToPropTypes } from '@gouvfr/dsfr-kit/react';
import { ModelContext } from '@gouvfr/dsfr-kit';

export const FrIcon = (props) => {
  const model = new FrIconModel(props, ModelContext.REACT);

  return <span { ...model.props.attributes }></span>;
};

FrIcon.propTypes = rxSchemaToPropTypes(FrIconModel.schema);
FrIcon.defaultProps = rxSchemaToDefaultProps(FrIconModel.schema);
