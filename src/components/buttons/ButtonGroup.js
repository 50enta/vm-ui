import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function ButtonGroups({variant, color, values}){
    return (
        <div >
          <ButtonGroup variant={variant} color={color} aria-label="contained primary button group">
                {
                    values?.map((values, index) => {
                        return <Button key={index} onClick={() => console.log(values.name)}>{values.name}</Button>
                    }
                    )
                }
           </ButtonGroup>
        </div>
      );
}

export default ButtonGroups;

