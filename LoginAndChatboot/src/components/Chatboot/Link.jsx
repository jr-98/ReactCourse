import React from 'react'
import './Chatboot.css'
import { Table } from 'react-bootstrap'

const Link = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Useful Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="#"
                target="_blank"
              >
                Property Tax Bills/Receipt
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="#"
                target="_blank"
              >
                Birth & Death
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="#"
                target="_blank"
              >
                Property Tax
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="#"
                target="_blank"
              >
                Sports Registration
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="#"
                target="_blank"
              >
                Online Services
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Link
