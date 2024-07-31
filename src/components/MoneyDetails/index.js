import './index.css'

const MoneyDetails = () => (
  <div className="money-details-container">
    <div className="balance money-item-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="money-img"
      />
      <div className="money-text-container">
        <p className="money-text">Your Balance</p>
        <p className="rupees-text">Rs 0</p>
      </div>
    </div>
    <div className="income money-item-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="money-img"
      />
      <div className="money-text-container">
        <p className="money-text">Your Income</p>
        <p className="rupees-text">Rs 0</p>
      </div>
    </div>
    <div className="expenses money-item-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
        alt="expenses"
        className="money-img"
      />
      <div className="money-text-container">
        <p className="money-text">Your Income</p>
        <p className="rupees-text">Rs 0</p>
      </div>
    </div>
  </div>
)

export default MoneyDetails
