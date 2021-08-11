import React from 'react';

export default function Button(props) {
  return (
    <>
      {!props.hidden && (
        <div
          class={props.disabled ? 'button disabled' : 'button'}
          id={props.id}
        >
          {props.text ?? props.children}
        </div>
      )}
    </>
  );
}
