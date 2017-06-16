import React from 'react';
import UnauthenticatedLayout from '../../common/layouts/UnauthenticatedLayout';

// This is a functional component.
// It displays data from its parent, UnauthenticatedLayout.

export default function () {
  return (
    <div>
      Login form
      <UnauthenticatedLayout />
    </div>
  );
}
