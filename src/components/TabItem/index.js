import './index.css'

const TabItem = props => {
  const {tabDetails, UpdateTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  const onUpdate = () => {
    UpdateTabItem(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onUpdate}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
