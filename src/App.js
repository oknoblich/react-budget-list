import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { AboutPage } from 'Pages'
import { NumberInput, Tabs, TextInput, ToggleInput } from 'Components'
import 'App.css'

const DATA = [
  { expense: false, description: 'Salary', value: 4000 },
  { expense: false, description: 'Patents', value: 1500 },
  { expense: false, description: 'Trading', value: 1000.55 },
  { expense: true, description: 'Rent', value: 1250 },
  { expense: true, description: 'Vacation', value: 495 },
  { expense: true, description: 'Culture', value: 340 },
  { expense: true, description: 'Food', value: 202.5 },
  { expense: true, description: 'Streaming', value: 20 }
]

const App = () => {
  const [incList, setIncList] = useState([])
  const [expList, setExpList] = useState([])
  const [input, setInput] = useState({ expense: false, description: 'Test Item', value: '150.75' })

  const calcIncSum = incList.map((cur) => cur.value).reduce((pre, cur) => pre + cur, 0)
  const calcExpSum = expList.map((cur) => cur.value).reduce((pre, cur) => pre + cur, 0)
  const calcTotSum = calcIncSum - calcExpSum

  const calcPercentages = (item) => {
    const sumToCalc = item.expense ? calcExpSum : calcIncSum

    return (100 / sumToCalc * item.value).toFixed(0) + '%'
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.description !== '' && input.value !== '') {
      addItem(input)
    }

    setInput({ ...input, description: 'Test Item', value: '150.75' })
  }

  const handleChange = (name, value) => setInput({ ...input, [name]: value })

  const addItem = (item) => {
    const value = Number(item.value)

    if (item.expense) {
      const tempList = [...expList]
      tempList.push({ expense: true, description: item.description, value: value })
      setExpList(tempList)
    } else {
      const tempList = [...incList]
      tempList.push({ expense: false, description: item.description, value: value })
      setIncList(tempList)
    }
  }

  const removeItem = (item, index) => {
    if (item.expense) {
      const tempList = [...expList]
      tempList.splice(index, 1)
      setExpList(tempList)
    } else {
      const tempList = [...incList]
      tempList.splice(index, 1)
      setIncList(tempList)
    }
  }

  const clearInc = () => setIncList([])
  const clearExp = () => setExpList([])

  useEffect(() => {
    const tempInc = []
    const tempExp = []

    for (const entry of DATA) entry.expense ? tempExp.push(entry) : tempInc.push(entry)

    setIncList(tempInc)
    setExpList(tempExp)
  }, [])

  const format = (value) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)

  return (
    <Router>
      <Tabs />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" render={() => (
            <main>
              <h1 className="bo-intro mb-5 p-0">{format(calcTotSum)}</h1>

              <form onSubmit={handleSubmit} className="mb-5">
                <div className="row align-items-center">
                  <div className="col-12 col-md-auto">
                    <ToggleInput
                      value={input.expense}
                      onChange={(name, value) => handleChange(name, value)}
                      label={['Income', 'Expense']}
                      name="expense"
                    />
                  </div>
                  <div className="col-12 col-md">
                    <TextInput
                      value={input.description}
                      onChange={(name, value) => handleChange(name, value)}
                      label="Description"
                      name="description"
                    />
                  </div>
                  <div className="col-12 col-md">
                    <NumberInput
                      value={input.value}
                      onChange={(name, value) => handleChange(name, value)}
                      label="Amount"
                      name="value"
                    />
                  </div>
                  <div className="col-12 col-md">
                    <button className={`bo-button ${input.expense ? 'is-danger' : 'is-safe'}`} type="submit">Add Item</button>
                  </div>
                </div>
              </form>

              <div className="row">
                <div className="col-12 col-lg-6">
                  <table className="table is-striped">
                    <tbody>
                      <tr>
                        <td style={{ width: 300 }}><b>Income</b></td>
                        <td></td>
                        <td className="text-right"><b>{format(calcIncSum)}</b></td>
                        <td className="text-right">
                          <div onClick={clearInc} className="icon icon-close-gray-1"></div>
                        </td>
                      </tr>
                      {
                        incList.map((item, index) => (
                          <tr key={index}>
                            <td>{item.description}</td>
                            <td className="text-right">{calcPercentages(item)}</td>
                            <td className="text-right">{format(item.value)}</td>
                            <td className="text-right">
                              <div onClick={() => removeItem(item, index)} className="icon icon-close-gray-1"></div>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
                <div className="col-12 col-lg-6">
                  <table className="table is-striped">
                    <tbody>
                      <tr>
                        <td style={{ width: 300 }}><b>Expense</b></td>
                        <td></td>
                        <td className="text-right"><b>{format(calcExpSum)}</b></td>
                        <td className="text-right">
                          <div onClick={clearExp} className="icon icon-close-gray-1"></div>
                        </td>
                      </tr>
                      {
                        expList.map((item, index) => (
                          <tr key={index}>
                            <td>{item.description}</td>
                            <td className="text-right">{calcPercentages(item)}</td>
                            <td className="text-right">{format(item.value)}</td>
                            <td className="text-right">
                              <div onClick={() => removeItem(item, index)} className="icon icon-close-gray-1"></div>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          )} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
