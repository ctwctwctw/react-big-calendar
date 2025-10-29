import React from 'react'
import PropTypes from 'prop-types'

/**
 * HoverPopupWrapper component that renders a custom hover component
 * positioned at the cursor location when hovering over calendar events.
 */
function HoverPopupWrapper({
  children,
  event,
  hoverComponent: HoverComponent,
  isHovered,
  mousePosition,
}) {
  if (!HoverComponent || !isHovered) {
    return children
  }

  return (
    <>
      {children}
      <div
        className="rbc-hover-popup"
        style={{
          position: 'fixed',
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      >
        <HoverComponent event={event} />
      </div>
    </>
  )
}

HoverPopupWrapper.propTypes = {
  children: PropTypes.node,
  event: PropTypes.object,
  hoverComponent: PropTypes.elementType,
  isHovered: PropTypes.bool,
  mousePosition: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
}

HoverPopupWrapper.defaultProps = {
  isHovered: false,
  mousePosition: { x: 0, y: 0 },
}

export default HoverPopupWrapper
