import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite'

const Counter = ({ counterStore }: any) => {

  return (
    <div style={{
      marginBottom: '10px',
      outline: '2px solid red'
    }}>
      <div>
        {counterStore.count}
      </div>
      <button
        onClick={counterStore.handleIncrement}>
        Inc
      </button>
      <button
        onClick={counterStore.handleDecrement}>
        Dec
      </button>
    </div>
  );
}

export default inject('counterStore')(observer(Counter));
