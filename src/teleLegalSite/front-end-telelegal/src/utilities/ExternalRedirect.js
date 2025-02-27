import React, { useEffect } from 'react';

function ExternalRedirect({ to }) {
  useEffect(() => {
    // Redirect to the external URL
    window.location.href = to;
  }, [to]);

  return (
    <div>
      Redirecting to <strong>{to}</strong>...
    </div>
  );
}

export default ExternalRedirect;