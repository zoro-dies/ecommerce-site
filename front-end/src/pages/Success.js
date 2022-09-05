
import { Check } from '@material-ui/icons'
import React , { useEffect, useState } from 'react'

const Success = () => {

    return(
        <div className='successBody'>
            <div className='card'>
                
                <div>
                <Check style={{ fontSize: 150 }} />
                </div>
                <h1>Payment SUCCESS</h1>
             </div>

      </div>
    )
}


export default Success