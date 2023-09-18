import os from '@/os'
import { injectCSS } from '@/utils/style'
import { useMemo, useState } from 'react'
import { NavLink as LinkDom, resolvePath } from 'react-router-dom'
import { Link as LinkNative, useLocation } from 'react-router-native'

const className = 'react-router-native-or-dom-link-element'
injectCSS(`
  .${className} {
    opacity: 1;
    text-decoration: none;
    transition: opacity 0.1s ease-in-out;
  }
    
  .${className}:hover {
    opacity: 0.95;
  }
  
  .${className}:focus {
    outline-width: 2px;
    outline-style: dashed;
    outline-color: gray;
    outline-offset: -3px;
    opacity: 0.9;
  }
    
  .${className}:active {
    opacity: 0.5;
  }
  
  .${className}:visited {
    color: inherit;
  }
`)

type RenderState = {
  isDown: boolean
  isActive: boolean
  isHover: boolean
  isFocus: boolean
}

type LinkProps = {
  render: (RenderState) => any
  forceRender?: boolean

  to: string
  replace?: boolean
  state?: any
}

export default function Link({ render, forceRender, ...props }: LinkProps) {
  const location = useLocation()
  const [isDown, setIsDown] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const isActive = resolvePath(props.to).pathname === location.pathname

  const children = useMemo(() => {
    return render({ isDown, isActive, isHover, isFocus })
  }, [props.to, isDown, isHover, isActive, forceRender && {}])

  return os.isWeb ? (
    <LinkDom
      {...props}
      children={children}
      className={className}
      onPointerDown={() => setIsDown(true)}
      onPointerUp={() => setIsDown(false)}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    />
  ) : (
    <LinkNative
      {...props}
      children={children}
      style={{}}
      onPressIn={() => setIsDown(true)}
      onPressOut={() => setIsDown(false)}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
    />
  )
}
