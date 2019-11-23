import React from 'react'
// import { connect } from 'react-redux';
// import { addSchoolToBookmarks } from '../actions/myBookmarks'

const FloristCard = (props) => {

  return ( 
    <div>
    <div key={props.florist.id}>
      <h1>{props.florist.name}</h1>
      {/* <h3>{`Rating: ${school.rating}`}</h3> */}
      {/* <p>{school.location.city}, {school.location.state}  |  {school.phone} </p> */}
      <img className='img-size' src={props.florist.image_url} alt={`Florist: ${props.florist.name}`}/><br/><br/>
      <a target="_blank" href={props.florist.url}>Learn more about this florist!</a><br/><br/>
      {/* <button className="btn btn-info" onClick={handleClick}> Bookmark </button> */}
    </div>
    </div>
  )
}

export default FloristCard
// const mapStateToProps = state => {
//   const userId = state.currentUser ? state.currentUser.id : ""
//   return {
//       schoolInfo: state.browseSchoolsForm,
//       userId
//   }
// }

// export default connect(mapStateToProps, {addSchoolToBookmarks})(SchoolCard);