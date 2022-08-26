import React from 'react';
import list from './components/list';
import RenderVedio from './RenderVedio';

const Display = () => {
  return (
    <div>
        {
            list.map((view)=>(
            <RenderVedio key={view.id} view={view}/>))
        }
    </div> 
  )
}

export default Display