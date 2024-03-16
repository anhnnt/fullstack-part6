import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20
  }


 /**
  * {notification.length > 0 &&
        <div style={style}>
          {notification.map((noti, index) => (
            <p key={index}>{noti}</p>
          ))}
        </div>}
  *  */ 
  return (
    <div>
      {notification &&
      <div style={style}>
        {notification}
      </div>}
    </div>
  )
}

export default Notification