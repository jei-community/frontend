import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

import swaggerDoc from './doc/swagger.json';

/** Swagger 페이지 */
export default function Swagger() {
  return (
    <>
      <SwaggerUI spec={swaggerDoc} docExpansion='list' defaultModelExpandDepth={3} />
    </>
  );
}
