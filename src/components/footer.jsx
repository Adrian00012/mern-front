import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div className="containerF">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy;ACNH-WORLD</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"/>aa</svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="https://acnh-world-da25.onrender.com/" class="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a href="https://acnh-world-da25.onrender.com/" class="nav-link px-2 text-muted">About</a></li>
    </ul>
  </footer>
</div>
    )
  }
}
