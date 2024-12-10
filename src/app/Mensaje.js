import React, { useEffect } from 'react';

export default function Mensaje() {
    useEffect(() => {
        console.log('Me ejecuto en cada render');
      });
}