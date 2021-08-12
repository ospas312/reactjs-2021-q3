import './Modal.scss';
import * as React from 'react';

interface IProps {
  active: boolean;
  setActive: (value: boolean) => void;
}

export function Modal(props: IProps): JSX.Element {
  return (
    <div className={props.active ? 'modal active' : 'modal'}>
      <div className="modal__content">
        <p className="message__text">Data saved</p>
        <button onClick={() => props.setActive(false)}>Close</button>
      </div>
    </div>
  );
}
