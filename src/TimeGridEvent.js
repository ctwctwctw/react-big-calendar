import clsx from 'clsx'
import React, { useState } from 'react'
import HoverPopupWrapper from './HoverPopupWrapper'

function stringifyPercent(v) {
  return typeof v === 'string' ? v : v + '%'
}

/* eslint-disable react/prop-types */
function TimeGridEvent(props) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const {
    style,
    className,
    event,
    accessors,
    rtl,
    selected,
    label,
    continuesPrior,
    continuesAfter,
    getters,
    onClick,
    onDoubleClick,
    isBackgroundEvent,
    onKeyPress,
    components: { event: Event, eventWrapper: EventWrapper },
    hoverComponent,
  } = props
  let title = accessors.title(event)
  let tooltip = accessors.tooltip(event)
  let end = accessors.end(event)
  let start = accessors.start(event)

  let userProps = getters.eventProp(event, start, end, selected)

  const inner = [
    <div key="1" className="rbc-event-label">
      {label}
    </div>,
    <div key="2" className="rbc-event-content">
      {Event ? <Event event={event} title={title} /> : title}
    </div>,
  ]

  const { height, top, width, xOffset } = style

  const eventStyle = {
    ...userProps.style,
    top: stringifyPercent(top),
    height: stringifyPercent(height),
    width: stringifyPercent(width),
    [rtl ? 'right' : 'left']: stringifyPercent(xOffset),
  }

  const handleMouseEnter = (e) => {
    setIsHovered(true)
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e) => {
    if (isHovered) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <HoverPopupWrapper
      event={event}
      hoverComponent={hoverComponent}
      isHovered={isHovered}
      mousePosition={mousePosition}
    >
      <EventWrapper type="time" {...props}>
        <div
          role="button"
          tabIndex={0}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          style={eventStyle}
          onKeyDown={onKeyPress}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          title={
            tooltip
              ? (typeof label === 'string' ? label + ': ' : '') + tooltip
              : undefined
          }
          className={clsx(
            isBackgroundEvent ? 'rbc-background-event' : 'rbc-event',
            className,
            userProps.className,
            {
              'rbc-selected': selected,
              'rbc-event-continues-earlier': continuesPrior,
              'rbc-event-continues-later': continuesAfter,
            }
          )}
        >
          {inner}
        </div>
      </EventWrapper>
    </HoverPopupWrapper>
  )
}

export default TimeGridEvent
