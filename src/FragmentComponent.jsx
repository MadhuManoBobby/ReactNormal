import React, { Fragment } from 'react'

export default function FragmentComponent() {
  return (
    <Fragment>
        <table>
            <tr>
                <ChildForFragmentComponent/>
            </tr>
        </table>
    </Fragment>
  )
}


export function ChildForFragmentComponent() {
  return (
    <>
        <td>Employee Data</td>
    </>
  )
}
