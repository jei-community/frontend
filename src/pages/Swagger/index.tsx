import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

import swaggerDoc from './doc/swagger.json';

/** Swagger 페이지 */
export default function Swagger() {
  return (
    <React.Fragment>
      <SwaggerUI spec={swaggerDoc} docExpansion='list' defaultModelExpandDepth={3} />
    </React.Fragment>
  );
}
