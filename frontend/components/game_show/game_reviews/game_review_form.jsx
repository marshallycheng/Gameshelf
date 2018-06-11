import React from 'react';
import { withRouter } from 'react-router-dom';

class GameReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.state = this.props.review;
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  updateRating(e) {
    this.setState({rating: e.target.value});
    const starElements = document.getElementsByClassName('star');
    const stars = Array.prototype.slice.call(starElements);

    stars.forEach((star) => {
      star.classList.remove('star-checked');
    });
    e.target.classList.add('star-checked');
  }

  render() {
    return (
      <div className="review-form-container">
        <form onSubmit={this.handleSubmit}>

          <input
            className="review-form-title"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.update('title')}
          />

          <textarea
            className="review-form-body"
            placeholder="Write a review..."
            value={this.state.body}
            onChange={this.update('body')}
          />

          <div className="review-form-rating">
            <input className="star" type="radio" name="rating" id="star5" value="5" onClick={this.updateRating}/>
            <input className="star" type="radio" name="rating" id="star4" value="4" onClick={this.updateRating}/>
            <input className="star" type="radio" name="rating" id="star3" value="3" onClick={this.updateRating}/>
            <input className="star" type="radio" name="rating" id="star2" value="2" onClick={this.updateRating}/>
            <input className="star" type="radio" name="rating" id="star1" value="1" onClick={this.updateRating}/>
          </div>

          <input
            className="review-form-button"
            type="submit"
            value={this.props.submitButton} />

        </form>
      </div>
    );
  }
}

export default withRouter(GameReviewForm);
