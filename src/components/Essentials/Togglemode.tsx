import React from 'react'
import { IconButton, useColorMode, type ThemeConfig } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Togglemode: React.FC  = () => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <>
            <IconButton
            icon={ colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
            onClick={toggleColorMode}
            aria-label="Color mode switcher"
            /> 
        </>
  )
}

export default Togglemode