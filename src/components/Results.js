import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { GridTile } from 'material-ui'

class Results extends Component {
  render() {
    if(!this.props.searchResults) {
      return <Redirect to='/' />
    }
    return(
      <div className='container-fluid text-white results-background'>
        <div className='row m-b'>
          {
            this.props.searchResults.results.map(result => {
              return(
                <div className='col-md-3 m-t m-b result-card' key={result.id}>
                  <GridTile
                    style={{boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 30px, rgba(0, 0, 0, 0.23) 0px 6px 10px'}}
                    key={result.id}
                    title={result.name}
                    subtitle={<span><b>{result.currency}</b> ${result.price}</span>}
                  >
                    <img src={result.imageUrl} />
                  </GridTile>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults
})

export default connect(mapStateToProps)(Results)
