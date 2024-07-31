import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="header-container">
          <h1 className="heading">Hi,Richard</h1>
          <p className="description-text">
            Welcome back to your{' '}
            <span className="money-manager-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
      </div>
    )
  }
}

export default MoneyManager
