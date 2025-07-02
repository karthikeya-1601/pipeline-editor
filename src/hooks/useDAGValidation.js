import { useMemo } from 'react';
import { validateDAG } from '../utils/dagValidation';

const useDAGValidation = (elements) => {
  return useMemo(() => {
    const nodes = elements.filter(el => el.type === 'custom');
    const edges = elements.filter(el => el.source && el.target);
    
    return validateDAG(nodes, edges);
  }, [elements]);
};

export default useDAGValidation;