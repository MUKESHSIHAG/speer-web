import {React,Component} from 'react';
import StarRatings from 'react-star-rating-component';
import '../styles/review.css'

class Review extends Component {
  render() {
    return (
      <div className="review">
        <div style={{marginLeft:"2rem", fontSize:"2.7rem", marginBottom: "-1rem"}}><StarRatings /></div>
        <h2 className="artist-name">{this.props.name}</h2>
        <h2 className="artist-txt">“Love it, it’s the Best.I can’t live without it!”</h2>
      </div>
    )
  }
}

export default Review