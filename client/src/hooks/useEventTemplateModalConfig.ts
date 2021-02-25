import React from 'react';

type ModeType = 'add' | 'edit';

interface ModelState{
  display: boolean;
  mode: ModeType
}

const useEventTemplateModalConfig = ({
  display = false,
  mode = 'add',
}:ModelState) => {

  const [displayETModal,setDisplayETModal] = React.useState<ModelState>({
    display: display,
    mode: mode
  });

  const handleCloseETModal = () => {
    setDisplayETModal(displayETModal => {
      return {
        ...displayETModal,
        display: false
      }
    })
  }

  const handleSetETModal = (obj:ModelState) => {
    setDisplayETModal(displayETModal => {
      return {
        ...displayETModal,
        display: obj.display,
        mode: obj.mode
      }
    })
  }

  return {
    displayETModal,
    handleCloseETModal,
    handleSetETModal
  }
}

export default useEventTemplateModalConfig;
