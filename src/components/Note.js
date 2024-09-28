/* eslint-disable react/prop-types */
const Note = ({ content, initialPosition, ...props}) => {
  return (
    <div style={{
        position: 'absolute',
        padding: '10px',
        left: `${initialPosition.x}px`,
        top:`${initialPosition.y}px`,
        display: 'flex',
        width: '200px',
        height: '100px',
        userSelect: 'none',
        cursor:'move',
        border: '1px solid #000',
        backgroundColor: '#c36542',
        overflowX: 'none',
        overflowY: 'auto'
    }}>
        <p>{content}</p>
    </div>
  )
}

export default Note;