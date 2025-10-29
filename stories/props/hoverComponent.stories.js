import React from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from '../../src'
import events from '../resources/events'

export default {
  title: 'props',
  component: Calendar,
  parameters: {
    docs: {
      page: null,
    },
  },
}

const localizer = momentLocalizer(moment)

// Custom hover component that displays event details
const CustomHoverPopup = ({ event }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        minWidth: '200px',
        maxWidth: '300px',
        pointerEvents: 'none',
      }}
    >
      <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>
        {event.title}
      </h4>
      {event.desc && (
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          {event.desc}
        </p>
      )}
      <div style={{ fontSize: '11px', color: '#999' }}>
        <div>Start: {moment(event.start).format('LLL')}</div>
        <div>End: {moment(event.end).format('LLL')}</div>
      </div>
    </div>
  )
}

export const HoverComponent = () => {
  return (
    <>
      <div
        style={{
          marginBottom: '16px',
          padding: '12px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
        }}
      >
        <strong>Hover Component Demo</strong>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>
          Hover over any event to see a custom popup component with event
          details. The popup follows your cursor position.
        </p>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        hoverComponent={CustomHoverPopup}
      />
    </>
  )
}

HoverComponent.storyName = 'hoverComponent'
