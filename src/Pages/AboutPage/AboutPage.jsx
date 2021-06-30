import React from 'react'

const AboutPage = () => {
  const stack = ['React', 'Router']

  return (
    <div className="row">
      <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="bo-card">
          <div className="bo-card-head">
            <h2 className="text-center">Stack</h2>
          </div>
          <div className="bo-card-body">
            <p className="mb-3">This test project is build with:</p>
            <ul className="text-list">
              {
                stack.map((cur, i) => (
                  <li key={i}>{cur}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
